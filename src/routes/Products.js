import React,{ Component } from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Button,Input,message } from 'antd';

class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    onDelete(id){
        this.props.dispatch({
            type:'products/delete',
            payload:{
                id:id
            }
        });
    }
    addProduct(value){
        if(value){
            this.props.dispatch({
                type:'products/addProduct',
                payload:{
                    value:value
                }
            })
            // 添加后清空.
            this.setState({value:''});
        }else{
            message.error('物品名称不能为空.');
        }
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
            <div>
               <div style={{textAlign:'center',color:"#5aaafa"}}>当前有<strong>{data.length}</strong>个物品</div>
                <span>
                    <h2>添加物品</h2>
                </span>
                物品名称：
                <Input style={{borderWidth:1,borderColor: '#5aaafa',width:'300px'}}
                    value={this.state.value}
                    onChange={e=> this.setState({value:e.target.value})}
                ></Input>
                <span style={{paddingLeft:'10px'}}></span>
                <Button type="primary" onClick={() => this.addProduct(this.state.value)}>添加</Button>

                <Table 
                    dataSource={data} 
                    columns={columns}>
                </Table>
        </div>
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