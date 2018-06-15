import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
};

const defaultProps = {
  handleSearch: () => null,
  keys: [],
  filters: {},
};
class Search extends Component {
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
    const activeFilters = [];

    const filterSelected = Object.keys(selectedFilters).some(k => selectedFilters[k]);

    if (!filterSelected) {
      return list;
    }
    Object.keys(filters).forEach((f) => {
      filters[f].forEach((e) => {
        if (e.value) {
          activeFilters.push({ [f]: e.name });
        }
      });
    });
    return list.filter(listElement =>
      activeFilters.every((f) => {
        const key = Object.keys(f)[0];
        return listElement[key] === f[key];
      }));
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

  handleClose = (filters) => {
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
    const bgStyles = this.state.selectedFilters[f]
      ? { ...styles.label, ...styles.labelOn }
      : styles.label;
    return (
      <Button
        onPress={() => this.handleOpenFilter(f)}
        key={i}
        backgroundStyles={bgStyles}
        textStyles={styles.labelText}
        outline
        text={f}
      />
    );
  };

  renderModal = (visible, filters) => (
    <FilterModal
      modalVisible={visible}
      title="Specialties"
      filters={filters}
      closeModal={this.handleClose}
    />
  );

  render() {
    return (
      <View>
        <View style={styles.wrapper}>
          <Input
            placeholder="Search"
            type="squared"
            onChangeText={text => this.handleChange(text)}
            value={this.state.value}
            style={{ height: 40 }}
            onEndEditing={this.onEndEditing}
            returnKeyType="search"
          />
          {this.state.value !== '' && (
            <View style={styles.button}>
              <Button
                onPress={this.cleanInput}
                icon="ios-close"
                transparent
                textStyles={{ color: '#999', fontSize: 28 }}
                backgroundStyles={{ height: 40, width: 40 }}
              />
            </View>
          )}
        </View>
        {this.state.selectedFilter &&
          this.renderModal(this.state.modalVisible, this.state.filters[this.state.selectedFilter])}
        <View style={styles.wrapper}>
          {Object.keys(this.state.filters).map((e, i) => this.renderFilterLabel(e, i))}
        </View>
      </View>
    );
  }
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
export default Search;
