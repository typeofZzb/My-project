import React, { Component } from 'react'
import { Modal, Button, Form, Input } from 'antd'
import { formData } from "@/utils/management.js"
import ModalStyle from './scss/modal.module'
import { observer, inject } from "mobx-react"

@inject('aboutXlsx')
@observer
class Index extends Component {
    state = {
        loading: false,
    }

    handleOk = () => {
        let { getFieldsValue } = this.props.form;
        let res = getFieldsValue()
        let { addFn } = this.props.aboutXlsx
        
        this.setState({ loading: true });
        addFn(res)
        setTimeout(() => {
            this.setState({ loading: false});
        }, 3000);
    };

    handleCancel = () => {
        this.props.aboutXlsx.visible = false
    };
    render() {
        let { loading } = this.state
        let { getFieldDecorator } = this.props.form;
        let { visible } = this.props.aboutXlsx
        return (
            <div className={ModalStyle['modal']}>
                <Modal
                    visible={visible}
                    title="添加"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            取消
                    </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            确定
                    </Button>,
                    ]}
                >
                    <Form>
                        {
                            formData && formData.map((item, index) => {
                                return <Form.Item label={item.label} key={index}>
                                    {
                                        getFieldDecorator(item.name, {
                                            rules: item.rules
                                        })(<Input />)
                                    }
                                </Form.Item>
                            })
                        }
                    </Form>
                </Modal>
            </div>

        )
    }
}
export default Form.create({})(Index)