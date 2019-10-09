export const columns = [
    {
        title: '姓名',
        dataIndex: 'staffName',
        key: 'staffName'
    },
    {
        title: '序号',
        dataIndex: 'classNum',
        key: 'classNum'
    },
    {
        title: '部门',
        dataIndex: 'department',
        key: 'department'
    },
    {
        title: '职位',
        key: 'job',
        dataIndex: 'job'
    },
    {
        title: '入职时间',
        key: 'entryTime',
        dataIndex: 'entryTime'
    },
    {
        title: '出生日期',
        key: 'headerId',
        dataIndex: 'headerId'
    },
    {
        title: '学历',
        key: 'education',
        dataIndex: 'education'
    },
    {
        title: '籍贯',
        key: 'nativePlace',
        dataIndex: 'nativePlace'
    },
    {
        title: '民族',
        key: 'nation',
        dataIndex: 'nation'
    },
    {
        title: '政治面貌',
        key: 'quitReason',
        dataIndex: 'quitReason'
    },
    {
        title: '婚姻状况',
        key: 'isMarray',
        dataIndex: 'isMarray'
    },
    {
        title: '省份证号',
        key: 'IDNum',
        dataIndex: 'IDNum'
    },
    {
        title: '户籍性质',
        key: 'nativeType',
        dataIndex: 'nativeType'
    },
    {
        title: '现住址',
        key: 'address',
        dataIndex: 'address'
    },
    {
        title: '联系电话',
        key: 'tel',
        dataIndex: 'tel'
    }
]

export const formData = [
    {
        label: "姓名",
        name: "staffName",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\u4e00-\u9fa5]+/,
            message: "至少一位汉字"
        }]
    },
    {
        label:"部门",
        name:"department",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\u4e00-\u9fa5]+/,
            message: "至少一位汉字"
        }]
    },
    {
        label:"职位",
        name:"position",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\w]+/,
            message: "至少一位汉字"
        }]
    },
    {
        label:"薪资",
        name:"salary",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\d]+/,
            message: "以数字开头"
        }]
    },
    {
        label:"电话号码",
        name:"tel",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\d]+/,
            message: "以数字开头"
        }]
    },
    {
        label:"是否离职",
        name:"isQuit",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\u4e00-\u9fa5]+/,
            message: "至少一位汉字"
        }]
    },
    {
        label:"离职原因",
        name:"quitReason",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\u4e00-\u9fa5]+/,
            message: "至少一位汉字"
        }]
    },
    {
        label:"身份证号",
        name:"IDNum",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\d]+/,
            message: "以数字开头"
        }]
    },
    {
        label:"入职时间",
        name:"entryTime",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\d]+/,
            message: "以数字开头"
        }]
    },
    {
        label:"学历",
        name:"education",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern:/^[\u4e00-\u9fa5]+/,
            message: "至少一位汉字"
        }]
    },
    {
        label:"籍贯",
        name:"nativePlace",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\u4e00-\u9fa5]+/,
            message: "至少一位汉字"
        }]
    },
    {
        label:"民族",
        name:"nation",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\u4e00-\u9fa5]+/,
            message: "至少一位汉字"
        }]
    },
    {
        label:"婚姻状况",
        name:"isMarray",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\u4e00-\u9fa5]+/,
            message: "至少一位汉字"
        }]
    },
    {
        label:"户籍性质",
        name:"nativeType",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\u4e00-\u9fa5]+/,
            message: "至少一位汉字"
        }]
    },
    {
        label:"现住址",
        name:"address",
        rules: [{
            required: true,
            message: '名称不能为空',
        }, {
            pattern: /^[\u4e00-\u9fa5]+/,
            message: "至少一位汉字"
        }]
    },
]