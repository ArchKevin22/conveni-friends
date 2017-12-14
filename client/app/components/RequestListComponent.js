import React from 'react';
import { StyleSheet, FlatList, ListView, Alert, Text, View, TextInput, Button } from 'react-native';
// import styles from 'client/styles/style';
import Card from 'client/app/components/Card';
import RenderSeparator from 'client/app/components/ListSeparator';

export default class RequestListComponent extends React.Component {
	static navigationOptions = {		
	}
	constructor(props) {
		super(props);
		this._renderItem = this._renderItem.bind(this);
		this.getRequestDetails = this.getRequestDetails.bind(this);
	}

	_renderItem = ({ item }) => (
		<Card
			data={item}
			navigation={this.props.navigation}
			onClick={() => this.getRequestDetails(item)}
		/>
	);

	_renderSeparator = () => (
		<RenderSeparator/>
	);

	getRequestDetails(data) {
		const { navigation, user } = this.props;
		navigation.navigate('RequestDetailsScreen', { request: data.request, user });
	}

	render() {
		const ITEM_HEIGHT = 400;
		if (this.props.data) {
			return (
				<FlatList
					ItemSeparatorComponent={this._renderSeparator}
					data={this.props.data}
					user={this.props.user}
					renderItem={this._renderItem}
				/>
			);
		}
		else {
			return (<View><Text>There are no requests to be shown.</Text></View>);
		}

	}
}
