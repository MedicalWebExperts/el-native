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
    updateFilter: func.isRequired,
    modalVisible: bool.isRequired,
    closeModal: func.isRequired,
  };

  state = {
    selectAll: false,
  };

  updateSelectAll = (value, filters, updateFilter) => {
    filters.forEach(filter => updateFilter(filter, value));
    this.setState(prevState => ({ selectAll: !prevState.selectAll }));
  };

  render() {
    const {
      title, filters, updateFilter, modalVisible, closeModal,
    } = this.props;
    const { selectAll } = this.state;
    return (
      <View style={{ marginTop: 60 }}>
        <Modal animationType="slide" visible={modalVisible} onRequestClose={() => {}}>
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
                  onPress={value => this.updateSelectAll(value, filters, updateFilter)}
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
                      onPress={value => updateFilter(filter, value)}
                      styles={styles.switch}
                    />
                  </Row>
                ))}
            </View>
          </Col>
        </Modal>
      </View>
    );
  }
}

export default FilterModal;
