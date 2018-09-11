import React from 'react';
import PropTypes  from 'prop-types';
import { Table,Popconfirm,Button } from 'antd';

const ProductList = ({onDelete,products}) =>{
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Author",
            dataIndex: "author",
        },
        {
            title: "Version",
            dataIndex: "ver",
        },
        {
            title: "Publish date",
            dataIndex: "publishDate",
        },
        {
            title:"Actions",
            render:(text,record) =>{
                return (
                    <Popconfirm title="Delete?" onConfirm={()=> onDelete(record.id)}>
                        <Button>Delete</Button>
                    </Popconfirm>
                );
            }
        }
    ];
    return (
        <Table 
            dataSource={products} 
            columns={columns}>
        </Table>
    );
}

ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
}

export default ProductList;