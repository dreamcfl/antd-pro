// import { useIntl } from 'umi';
import { DefaultFooter } from '@ant-design/pro-layout';
import { HeartTwoTone } from '@ant-design/icons';

export default () => {
  // const intl = useIntl();
  // const defaultMessage = intl.formatMessage({
  //   id: 'app.copyright.produced',
  //   defaultMessage: '蚂蚁集团体验技术部出品',
  // });

  const currentYear = new Date().getFullYear();
  const defaultMessage = "听我一言-技术修改"

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'listening2',
          title: '听我一言',
          href: 'https://blog.csdn.net/halo_hsuh?spm=1000.2115.3001.5113',
          // href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'hearticon',
          title: <HeartTwoTone twoToneColor="#eb2f96" />,
          href: 'https://blog.csdn.net/halo_hsuh?spm=1000.2115.3001.5113',
          // href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'listening2',
          title: '听我一言',
          href: 'https://blog.csdn.net/halo_hsuh?spm=1000.2115.3001.5113',
          // href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};


