import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { Button, FilterModal, Input } from '../index';
import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.search;

const propTypes = {
  handleSearch: PropTypes.func,
  keys: PropTypes.array,
  dataList: PropTypes.array.isRequired,
  filters: PropTypes.object,
  placeholder: PropTypes.string,
  inputStyles: PropTypes.object,
  cancelIconStyles: PropTypes.object,
  labelStyle: PropTypes.object,
  labelStyleActive: PropTypes.object,
  labelTextStyle: PropTypes.object,
  labelTextStyleActive: PropTypes.object,
  placeholderTextColor: PropTypes.string,
  filtersLabels: PropTypes.object,
};

const defaultProps = {
  handleSearch: () => null,
  keys: [],
  filters: {},
  placeholder: 'Search',
  inputStyles: {},
  cancelIconStyles: {},
  labelStyle: {},
  labelStyleActive: {},
  labelTextStyle: {},
  labelTextStyleActive: {},
  placeholderTextColor: '#999',
  filtersLabels: {},
};
class Search extends React.Component {
  constructor(props) {
    super(props);
    const selectedFilters = {};
    Object.keys(this.props.filters).forEach(e => Object.assign(selectedFilters, { [e]: false }));
    this.state = {
      value: '',
      modalVisible: false,
      filters: this.props.filters,
      selectedFilters,
    };
  }

  onEndEditing = () => {
    this.handleSearch();
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  searchByFilters = (list, filters, selectedFilters) => {
    const selectedFiltersName = Object.keys(selectedFilters).filter(k => selectedFilters[k]);
    if (!selectedFiltersName.length) {
      return list;
    }

    const findValueInMany = (values, comparator) => {
      if (values.indexOf(',') === -1) {
        return values === comparator;
      }
      const names = values.split(',');
      return names.indexOf(comparator) !== -1 || names.indexOf(` ${comparator}`) !== -1;
    };

    const filteredList = list.filter(e =>
      selectedFiltersName.every(currentFilterName =>
        // eslint-disable-next-line
        filters[currentFilterName].some(
          filterObject =>
            filterObject.value && findValueInMany(e[currentFilterName], filterObject.name))));
    return filteredList;
  };

  searchByKeys = (list, keys, patt) =>
    list.filter(listElement => keys.some(k => patt.test(listElement[k])));

  search = (list, value, keys) => {
    const regValues = value.split(' ').join('|');
    const patt = new RegExp(regValues, 'i');
    const { filters, selectedFilters } = this.state;
    let result = list;

    result = this.searchByFilters(list, filters, selectedFilters);

    if (value && keys) {
      return this.searchByKeys(result, keys, patt);
    }

    if (value === '') {
      return result;
    }

    return result.filter(e => patt.test(e));
  };

  handleSearch = () => {
    const { value } = this.state;
    const result = this.search(this.props.dataList, value, this.props.keys);

    this.props.handleSearch(result);
  };

  cleanInput = () => {
    this.setState({ value: '' }, () => this.handleSearch());
  };

  handleOpenFilter = (f) => {
    this.setState({ modalVisible: true, selectedFilter: f });
  };

  handleApplyFilters = (filters) => {
    const selected = filters.find(e => e.value);
    this.setState(
      prevState => ({
        modalVisible: false,
        selectedFilters: {
          ...prevState.selectedFilters,
          ...{ [prevState.selectedFilter]: !!selected },
        },
      }),
      () => {
        this.handleSearch();
      },
    );
  };

  renderFilterLabel = (f, i) => {
    const defaultStyles = { ...styles.label, ...this.props.labelStyle };
    const onStyles = { ...styles.labelOn, ...this.props.labelStyleActive };
    const bgStyles = this.state.selectedFilters[f]
      ? { ...defaultStyles, ...onStyles }
      : defaultStyles;

    const defaultTextStyle = { ...styles.labelText, ...this.props.labelTextStyle };
    const onTextStyles = { ...styles.labelTextOn, ...this.props.labelTextStyleActive };
    const textStyles = this.state.selectedFilters[f]
      ? { ...defaultTextStyle, ...onTextStyles }
      : defaultTextStyle;

    return (
      <Button
        onPress={() => this.handleOpenFilter(f)}
        key={i}
        backgroundStyles={bgStyles}
        textStyles={textStyles}
        outline
        text={this.props.filtersLabels[f].label}
      />
    );
  };

  renderModal = (visible, filters) => (
    <FilterModal
      modalVisible={visible}
      title={this.props.filtersLabels[this.state.selectedFilter].modalTitle}
      filters={filters}
      applyFilters={this.handleApplyFilters}
    />
  );

  render() {
    return (
      <View>
        <View style={styles.wrapper}>
          <Input
            placeholder={this.props.placeholder}
            type="squared"
            onChangeText={text => this.handleChange(text)}
            value={this.state.value}
            style={{ ...styles.input, ...this.props.inputStyles }}
            onEndEditing={this.onEndEditing}
            returnKeyType="search"
            errorLabel={false}
            placeholderTextColor={this.props.placeholderTextColor}
          />
          {this.state.value !== '' && (
            <View style={styles.cancelButtonWrapper}>
              <Button
                onPress={this.cleanInput}
                icon="ios-close"
                transparent
                textStyles={{ ...styles.cancelButtonIcon, ...this.props.cancelIconStyles }}
                backgroundStyles={styles.cancelButton}
              />
            </View>
          )}
        </View>
        <View style={styles.wrapper}>
          {Object.keys(this.state.filters).map((e, i) => this.renderFilterLabel(e, i))}
        </View>
        {this.state.selectedFilter &&
          this.renderModal(this.state.modalVisible, this.state.filters[this.state.selectedFilter])}
      </View>
    );
  }
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
export default Search;
