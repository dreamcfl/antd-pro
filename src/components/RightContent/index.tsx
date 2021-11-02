import { Space } from 'antd';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue=""
        options={[
          { label: <a target='_blank' href="https://blog.csdn.net/namechenfl">Mr chen博客</a>, value: 'Mr chen博客' },
          {
            label: <a target='_blank' href="https://github.com/dreamcfl/admin-pc">Vue+ElementUI 后台管理系统模版</a>,
            value: 'Vue+ElementUI 后台管理系统模版',
          },
          {
            label: <a target='_blank' href="https://github.com/dreamcfl/app">Vue+vantUI 移动端模版</a>,
            value: 'Vue+vantUI 移动端模版',
          },
          {
            label: <a target='_blank' href="https://github.com/dreamcfl/uniapp-project">uniapp项目模版</a>,
            value: 'uniapp 模版',
          },
        ]}
        // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
    
      <Avatar />
      {/* <SelectLang className={styles.action} /> */}
    </Space>
  );
};
export default GlobalHeaderRight;
