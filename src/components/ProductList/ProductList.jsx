import './ProductList.css';
import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { useState } from 'react';
import { useTelegram } from '../hooks/useTelegram';

const products = [
	{ id: '1', title: 'Штани', price: 40, description: 'Відомі штани за 40 гривень' },
	{ id: '2', title: 'Штани1', price: 50, description: 'Відомі штани за 50 гривень' },
	{ id: '3', title: 'Штани2', price: 60, description: 'Відомі штани за 60 гривень' },
	{ id: '4', title: 'Штани3', price: 70, description: 'Відомі штани за 70 гривень' },
	{ id: '5', title: 'Штани4', price: 80, description: 'Відомі штани за 80 гривень' },
	{ id: '6', title: 'Штани5', price: 90, description: 'Відомі штани за 90 гривень' },
	{ id: '7', title: 'Штани6', price: 100, description: 'Відомі штани за 100 гривень' },
	{ id: '8', title: 'Штани7', price: 110, description: 'Відомі штани за 110 гривень' },
]

const getTotalPrice = (items) => {
	return items.reduce((acc, item) => {
		return acc += item.price
	}, 0)
}

const ProductList = () => {

	const [addedItems, setAddedItems] = useState([]);
	const { tg } = useTelegram();
	const onAdd = (product) => {
		const alreadyAdded = addedItems.find(item => item.id === product.id);
		let newItems = [];

		if (alreadyAdded) {
			newItems = addedItems.filter(item => item.id !== product.id);
		} else {
			newItems = [...addItems, product]
		}
		setAddedItems(newItems)

		if (newItems.length === 0) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
			tg.MainButton.setParams({
				text: `Купить ${getTotalPrice(newItems)}`
			})
		}
	}

	return (
		<div>
			<div className={'list'}>
				{products.map(item => (
					<ProductItem
						product={item}
						onAdd={onAdd}
						className={'item'}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductList;
