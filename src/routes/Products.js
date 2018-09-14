import React,{ Component } from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Button } from 'antd';

class Products extends Component{

    onDelete(id){
        this.props.dispatch({
            type:'products/delete',
            payload:{
                id:id
            }
        });
    }

    render(){
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
                        <Popconfirm title="Delete?" onConfirm={()=> this.onDelete(record.id)}>
                            <Button type="danger">Delete</Button>
                        </Popconfirm>
                    );
                }
            }
        ];
        const data = this.props.products.data;
        return (
            <Table 
            dataSource={data} 
            columns={columns}>
        </Table>
        )
    }
}

function mapStateToProps(state){
    return{
        products: state.products
    }
}
const _products = connect(mapStateToProps)(Products)

export default _products;