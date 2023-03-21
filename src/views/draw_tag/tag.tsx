import React, { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { SONG_PICK } from "../../const/const"
import {RollBox}from "../../components/roll/roll"
import { GetGoodSentences,GetGoodSentencesLike,GetTag } from "../../axios/client"
import "./tag.less"
import { Pagination,Input ,Table,Tag,Select   } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {TAG_NODE,CHECK_TAG} from "../../const/const"
const { Search } = Input;
const DrawTag = function () {
     let cn: TAG_NODE[] = []
    let os:any=[]
    
    let checkos:CHECK_TAG[]=[]
              
    let [tags, setTags] = useState(cn)
    let [CooKey, setCooKey] = useState(true)
    let [song_count,setSongCount]=useState(10)
    let [page,setPage]=useState(1)
    let [pageSize,setPageSize]=useState(10)
    let [options,setoptions]=useState(os)
    let [ckoptions,setckoptions]=useState(checkos)

  let [searchValue,setSearchValue]=useState("")

  const columns: ColumnsType<TAG_NODE> = [
    {
    title: 'value',
    dataIndex: 'value',
    key: 'id',
   
    render:value => <div title={value}> {value}</div>
  },
    {
      title: '名字',
      dataIndex: 'label',
      key: 'label',
    
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      width:400,
      render: (_, { field,type,label }) => (
        <>
          {[field,type,label].map((tag) => {
            if(tag ){
              let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
            }
           
          })}
        </>
      ),
   
    }
  
  ]
  async function startList(value:string|2){

    console.log("成功",value)
  if (CooKey) {


    let tag :any =await  GetTag("")
    let tagData =tag.data.data
    let datas:any[]=[] ;
    let opx:CHECK_TAG[]=[]
    let data_filter :any[]=[];
    for(let t  of tagData ){
    
      if(value==2){
        datas=datas.concat(t.sheet_data)
} else {

t.sheet_data.map((item:any )=>{
  if(item.field==value){
    data_filter.push(JSON.parse(JSON.stringify(item)))
    console.log(item)
  }
})
}
//获取标签
opx= opx.concat({ field:t.name,data:[]})
    }
    setTags(data_filter)
    setSongCount(data_filter.length)
    setoptions(tagData)
    setckoptions(opx)
    setCooKey(false)

}


}
//startList(2)

function onChange(index:number,size:number){
 setPage(index)
 setPageSize(size)
  setCooKey(true)

}

function onSearch (value: string){
  
  setCooKey(true)
  setPage(1)
  startList(value) 

} 
function serchChange(e:any){
  e.persist();
  setTimeout(() => {
    console.log(e.target.value); // Too late!
  }, 100);
}
function handleChange  (value: any,op:any) {
  let opdata :TAG_NODE[] = JSON.parse(JSON.stringify(op)) 
  let ckos:any  =JSON.parse(JSON.stringify(ckoptions))
ckos.map((m :CHECK_TAG,i:number)=>{
if(m.field===value){
  ckos[i].data=opdata
 setckoptions(JSON.parse(JSON.stringify(ckos)))
}
  
})

};
    return (<div className={`selectmom`}>
      <div  className={`option`}>
        {options.map((op:any)=>{
      return(  <Select
         mode="tags"
         allowClear
         style={{ width: '150px' }}
         placeholder={[op.name]}
         defaultValue={[]}
         onChange={(o,opx)=>{handleChange(op.name,opx)}}
         options={op.sheet_data}
         key={op.name}
         
        />)
      })
       }</div>
      
       <div className={`check_tag`}>
       {
        ckoptions.map((m:CHECK_TAG)=>{
return(<span key={m.field}>{
  m.data.map((d:TAG_NODE)=>{
      return(<span key={d.id}>{d.value+","}</span>)
           })
}</span>)
    
        })
      }
       </div>
   
      <div className={`left-box`}> <Search placeholder="请输入" onSearch={onSearch} style={{ }} onChange={(e)=>{serchChange(e)}} />
      <Table dataSource={tags}  columns={columns} rowKey={"id"}   ></Table>
      </div>
   
    </div>)
}
export {DrawTag }