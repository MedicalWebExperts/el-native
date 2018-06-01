import React, { Component } from 'react';
import { bool, string, array, func } from 'prop-types';
import { Modal, Text, View } from 'react-native';

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
    onApplyFilters: func.isRequired,
  };

  state = {
    selectAll: false,
    filters: this.props.filters,
  };

  onApplyFilters = () => {
    this.props.onApplyFilters(this.state.filters);
    this.props.closeModal();
  };

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

  render() {
    const {
      title, filters, modalVisible, closeModal,
    } = this.props;
    const { selectAll } = this.state;
    return (
      <Modal animationType="slide" visible={modalVisible}>
        <Col style={styles.wrapper}>
          <Row style={{ ...styles.row, ...styles.titleWrapper }}>
            <Text style={styles.title}>{title}</Text>
            <Button
              onPress={() => {
                closeModal();
              }}
              icon="ios-close"
              textStyles={{ color: 'black', fontSize: 40 }}
              transparent
            />
          </Row>
          <View style={styles.innerWrapper}>
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
              filters.map(filter => (
                <Row key={filters.indexOf(filter)} style={styles.row}>
                  <Text style={styles.text}>{filter.name}</Text>
                  <Switch
                    color={colors.primary}
                    value={filter.value}
                    onPress={value => this.updateFilter(filter, value)}
                    styles={styles.switch}
                  />
                </Row>
              ))}
            <View style={styles.button}>
              <Button onPress={this.onApplyFilters} block text="APPLY FILTERS" />
            </View>
          </View>
        </Col>
      </Modal>
    );
  }
}

export default FilterModal;
