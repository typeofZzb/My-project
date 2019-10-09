import Vue from 'vue';
import {Button,Message,
        Form,FormItem,Input,
        Checkbox,Container,Header,
        Dropdown,Table,Main,
        Icon,DropdownItem,TableColumn,
        DropdownMenu,Submenu,MenuItem,
        MenuItemGroup,Aside,Menu,
        Select,Option,MessageBox,
        Dialog,Tabs,TabPane,
        Pagination

    } from 'element-ui';

Vue.use(Pagination)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Dialog)
Vue.use(Option)
Vue.use(Select)
Vue.use(Form)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Container)
Vue.use(Header)
Vue.use(Dropdown)
Vue.use(Table)
Vue.use(Main)
Vue.use(Icon)
Vue.use(DropdownItem)
Vue.use(TableColumn)
Vue.use(DropdownMenu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.prototype.$message=Message
Vue.prototype.$confirm=MessageBox.confirm
