 //登录页面
 const Login=require("./login/")
 //-------------------
 //无权限
 const Permission=require("./permission/")
 //-------------------
 //无视图404
 const Hundred=require("./hundred/")
 //-------------------
//首页
 const Home=require("./home/")
//子路由
//添加试题
const AddQuestions=require("./home/subrouting/addQuestions/")
//查看试题
const WatchQuestions=require("./home/subrouting/watchQuestions/")
//编辑试题
const EditQuestions=require("./home/subrouting/editQuestions/")
//试题详情
const QuestionsDetail=require("./home/subrouting/questionsDetail/")
//班级管理
const Grade=require("./home/subrouting/grade/")
//学生管理
const Student=require("./home/subrouting/student/")
//教室管理
const Room=require("./home/subrouting/room/")
//试题分类
const QuestionsType=require("./home/subrouting/questionsType/")
//添加用户
const AddUser=require("./home/subrouting/addUser/")
//用户展示
const ShowUser=require("./home/subrouting/showUser/")
//添加考试
const AddExam=require("./home/subrouting/addExam/")
//添加菜单
const Menu=require("./home/subrouting/menu/")
//创建试卷
const ExamEdit=require("./home/subrouting/examEdit/")
//试卷列表
const ExamList=require("./home/subrouting/examList/")
//试卷详情
const ExamDetail=require("./home/subrouting/examDetail/")
//阅卷
const ExaminationPapers=require("./home/subrouting/examinationPapers/")
//批卷班级
const ExamPaperClassList=require("./home/subrouting/examPaperClassList/")
//待批试卷
const ExamPaperClassmate=require("./home/subrouting/examPaperClassmate/")
 export {
   QuestionsType,
   AddUser,
   Menu,
   ExamEdit,
   ExamList,
   ExamDetail,
   ExaminationPapers,
   ExamPaperClassList,
   ExamPaperClassmate,
   AddExam,
   ShowUser,
    Login,
    Home,
    AddQuestions,
    WatchQuestions,
    EditQuestions,
    QuestionsDetail,
    Grade,
    Student,
    Room,
    Permission,
    Hundred
 }