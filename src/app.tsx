import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import RightContent from '@/components/RightContent';
const loginPath = '/user/login'; 

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState() {
  const fetchUserInfo = async () => {
    let userInfo = localStorage.getItem('userInfo_chart_Obj')
    console.log(userInfo)
    return userInfo || undefined;
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }
  return {
    fetchUserInfo,
    settings: {},
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: '',
    },
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      let userInfo = localStorage.getItem('userInfo_chart_Obj')
      if (!userInfo && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    }, 
    menuHeaderRender: undefined,
    // 自定义 403 页面 
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
