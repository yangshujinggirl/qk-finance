import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,SettingOutlined,MailOutlined
} from '@ant-design/icons';

const menuList=[
  {
    id:0,
    name:"工作台",
    chidrenNode:[
      {
        id:'0-0',
        name:'工作台',
        path:'financeWorkbench',
        chidrenNode:null
      }
    ],
    icon:<MailOutlined />,
    path:'null',
  },{
    id:1,
    name:"资产管理",
    icon:<AppstoreOutlined />,
    chidrenNode:[
      {
        id:'1-0',
        name:'融资企业',
        chidrenNode:null,
        path:'operateWorkbench',
      },{
        id:'1-1',
        name:'资产包列表',
        chidrenNode:null,
        path:'operateWorkbench',
      }
    ]
  },{
    id:2,
    name:"融资管理",
    icon:<SettingOutlined />,
    chidrenNode:[
      {
        id:'2-0',
        name:'融资申请',
        chidrenNode:null,
        path:'operateWorkbench',
      },{
        id:'2-1',
        name:'融资放款',
        chidrenNode:null,
        path:'operateWorkbench',
      },{
        id:'2-2',
        name:'企业白名单',
        chidrenNode:null,
        path:'operateWorkbench',
      },{
        id:'2-3',
        name:'请款管理',
        chidrenNode:null,
        path:'operateWorkbench',
      }
    ]
  },{
    id:3,
    name:"回款管理",
    icon:<SettingOutlined />,
    chidrenNode:[
      {
        id:'3-0',
        name:'银行流水',
        chidrenNode:null,
        path:'operateWorkbench',
      },{
        id:'3-1',
        name:'回款计划',
        chidrenNode:null,
        path:'operateWorkbench',
      }
    ]
  },{
    id:4,
    name:"平台管理",
    icon:<SettingOutlined />,
    chidrenNode:[
      {
        id:'4-0',
        name:'组织管理',
        chidrenNode:null,
        path:'operateWorkbench',
      },{
        id:'4-1',
        name:'角色管理',
        chidrenNode:null,
        path:'operateWorkbench',
      },{
        id:'4-2',
        name:'用户管理',
        chidrenNode:null,
        path:'operateWorkbench',
      }
    ]
  }
];

export default menuList;
