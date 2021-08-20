import { Form, Input, Checkbox, Button } from 'antd';
import React, { FC } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export const Login: FC = () => {
  const onFinished = () => {
    console.log('test');
  };
  return (
    <Form
      name='auth-login-form'
      initialValues={{ remeberMe: true }}
      onFinish={onFinished}
    >
      <Form.Item name='account'>
        <Input prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name='password'>
        <Input type='password' prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item name='remeberMe' valuePropName='checked'>
        <Checkbox>记住我</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' type='primary' className='large' block>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
