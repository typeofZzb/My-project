import axios from "axios";
export default {
    //动画片数据
    Cartoon:(pageSize)=>axios.get(`http://bb.shoujiduoduo.com/baby/bb.php?type=getlistv2&act=home&pagesize=${pageSize}&pid=26`),
    //动画片详情列表
    CartoonList:(pagesize,id)=>axios.get(`http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=${pagesize}&collectid=${id}`),
    // 宝宝听列表数据
    getlistenData : (type,pageSize,listId)=>axios.get(`/api?type=${type}&pageSize=${pageSize}&listId=${listId}`).then(res=>res),
    // 宝宝听歌曲歌词数据
    getlistenSongStr:(id)=>axios.get(`/api?type=getlyric&rid=${id}`),
    // 宝宝听列表数据
    getlistenStory : (type,pageSize,listid)=>axios.get(`/api?type=${type}&pageSize=${pageSize}&listid=${listid}`).then(res=>res),
    //儿歌数据
    getSong : (pagesize,collectid)=>axios.get(`/api?type=getvideos&pagesize=${pagesize}&collectid=${collectid}`),
    //请求宝宝看故事
    getbabylookstory:(pagesize,collectid)=>axios.get(`/api?type=getvideos&pagesize=${pagesize}&collectid=${collectid}`)  
}
    

   

