import React, { Component } from 'react';
import { bool, string, array, func } from 'prop-types';
import { Modal, Text, View, ScrollView } from 'react-native';

import Theme from '../Theme';
import Switch from '../Switch/Switch';
import Button from '../Button/Button';
import { Row, Col } from '../Layout/Layout';

const theme = Theme.getTheme();
const styles = theme.filterModal;
const { colors } = theme;

class FilterModal extends Component {
  static propTypes = {
    title: string.isRequired,
    filters: array.isRequired,
    modalVisible: bool.isRequired,
    closeModal: func.isRequired,
    applyFilters: func.isRequired,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const selectAll = nextProps.filters.every(e => e.value);
    return {
      ...prevState,
      ...{ filters: nextProps.filters, selectAll },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      filters: props.filters,
    };
  }

  updateFilter = (filter, value) => {
    const { filters } = this.state;
    filters[filters.indexOf(filter)].value = value;
    this.setState({
      filters,
    });
  };

  updateSelectAll = (value, filters) => {
    filters.forEach(filter => this.updateFilter(filter, value));
    this.setState(prevState => ({ selectAll: !prevState.selectAll }));
  };

  handleClose = (filters) => {
    filters.forEach(filter => this.updateFilter(filter, false));
    this.props.closeModal();
  };

  handleApplyFilters = () => {
    this.props.applyFilters(this.state.filters);
  };

  render() {
    const { title, modalVisible } = this.props;
    const { selectAll, filters } = this.state;

    return (
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => this.handleClose(filters)}
      >
        <Col style={styles.wrapper}>
          <Row style={{ ...styles.row, ...styles.titleWrapper }}>
            <Text style={styles.title}>{title}</Text>
            <Button
              onPress={() => this.handleClose(filters)}
              icon="ios-close"
              textStyles={styles.buttonText}
              transparent
            />
          </Row>
          <ScrollView style={styles.innerWrapper} showsVerticalScrollIndicator={false}>
            <Row style={styles.row}>
              <Text style={{ ...styles.text, ...styles.selectAll }}>Select All</Text>
              <Switch
                color={colors.primary}
                value={selectAll}
                onPress={value => this.updateSelectAll(value, filters)}
                styles={styles.switch}
              />
            </Row>
            {filters.length &&
              filters.map((filter, i) => (
                // eslint-disable-next-line
                <Row key={i} style={styles.row}>
                  <Text style={{ ...styles.text, ...styles.filter }} numberOfLines={1}>
                    {filter.name}
                  </Text>
                  <Switch
                    color={colors.primary}
                    value={filter.value}
                    onPress={value => this.updateFilter(filter, value)}
                    styles={styles.switch}
                  />
                </Row>
              ))}
            <Row style={styles.extraRow} />
          </ScrollView>
          <View style={styles.button}>
            <Button onPress={this.handleApplyFilters} block text="APPLY FILTERS" />
          </View>
        </Col>
      </Modal>
    );
  }
}

export default FilterModal;
