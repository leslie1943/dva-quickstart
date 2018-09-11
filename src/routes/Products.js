import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import styles from './Products.css';

// Step 1: 从models里 加载 products 和 login
// Step 2: dispatch触发的是 models里的 effects下定义的 'delete' 函数
// Step 3: delete函数再调用 call('asyncMethod',payload)
// Step 4: delete函数再调用 put('methodInReducers',payload)来更新state
const Products = ({dispatch, products,login}) => {
    function handleDelete (id){
        // 执行 models 文件夹下的 products下的delete方法.
        // models/products/delete
        dispatch({
            type: 'products/delete',
            payload: id,
        });
    }
    return (
        <div className={styles.title}>
            {/* <h1>{typeof login}</h1> */}
            <h1>{JSON.stringify(login)}</h1>
            <h2>List of Products</h2>
            <ProductList onDelete={handleDelete} products={products}></ProductList>
        </div>
    );
};

/**
 * connect
 * UI里面需要用到model里面数据的话，那么可以直接用connect将model里面的元素当作props的方式传递进来
 * 从models里 加载 products 和 login 
 */
export default connect( ({ products,login }) => ({products,login}))(Products);
