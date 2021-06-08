<template>
  <div class="xinxi">
    <el-row :gutter="14">
      <!--  -->
      <el-col :span="4">
        <div class="label-wrap category">
          <label for>类型:</label>
          <div class="warp-content">
            <el-select v-model="category_value" placeholder="请选择" style="width:100%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <!-- 日期 -->
      <el-col :span="7">
        <div class="label-wrap date">
          <label for>日期: &nbsp;&nbsp;</label>
          <div class="warp-content">
            <el-date-picker
              style="width: 100%;"
              v-model="data_value"
              type="datetimerange"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd HH:mm:ss"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']"
            >></el-date-picker>
          </div>
        </div>
      </el-col>

      <!-- 关键字 -->
      <el-col :span="4">
        <div class="label-wrap key-work">
          <label for>关键字: &nbsp;&nbsp;</label>
          <div class="warp-content">
            <el-select v-model="searth_key" style="width:100%">
              <el-option
                v-for="item in searchOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>

      <!-- 搜索 -->
      <el-col :span="4">
        <el-input v-model="search_keywork" placeholder="请输入内容" style="width:100%"></el-input>
      </el-col>

      <el-col :span="2">
        <el-button type="danger" style="width:100%">搜索</el-button>
      </el-col>

      <el-col :span="2" class="pull-right">
        <el-button type="danger" style="width:100%" @click="dislog_info = true">新增</el-button>
      </el-col>
    </el-row>
    <div style="height:38px"></div>

    <!-- 表格数据 -->
    <el-table :data="table_Data" border styel="widht:100%">
      <el-table-column type="selection" width="47" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" align="center" width="830px"></el-table-column>
      <el-table-column prop="categoryId" label="类别" align="center" width="136px"></el-table-column>
      <el-table-column prop="createDate" label="日期" align="center" width="240px"></el-table-column>
      <el-table-column prop="user" label="管理员" align="center" width="115px"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="danger">删除</el-button>
          <el-button size="mini" type="success">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 底部分页 -->
    <div style="margin-top:40px">
      <el-row>
        <el-col :span="12">
          <el-button size="mini">批量删除</el-button>
        </el-col>
        <el-col :span="12">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="1000"
            align="right"
          ></el-pagination>
        </el-col>
      </el-row>
    </div>

    <!-- 新增弹出框 -->
    <DialogInfo :flag.sync="dislog_info" @closes="closeDialog"/>
  </div>
</template>

<script>
import DialogInfo from "./dialog/info"
export default {
    data(){
        return{
            dislog_info: false,
            options: [{
          value: '1',
          label: '国际信息'
        }, {
          value: '2',
          label: '国内信息'
        }, {
          value: '3',
          label: '行业信息'
        }],
        category_value: '',
        data_value:'',
        searchOption:[
            {value:'id',label:'ID'},
            {value:'title',label:'标题'}
        ],
       searth_key:'ID',
       search_keywork:'',

    //    表单数据
       table_Data: [{
          title: '纽约市长白思豪宣布退出总统竞选 特朗普发推回应',
          categoryId: '国内信息',
          createDate: '2019-09-10 19:31:31',
          user:'超级管理员'
        },
        {
          title: '习近平在中央政协工作会议暨庆祝中国人民政治协商会议成立70周年大会上发表重要讲话',
          categoryId: '国内信息',
          createDate: '2019-09-10 19:31:31',
          user:'超级管理员'
        },
        {
          title: '基里巴斯与台当局"断交" 系蔡当局上台后断交第7国',
          categoryId: '国内信息',
          createDate: '2019-09-10 19:31:31',
          user:'超级管理员'
        },
        {
          title: '不选了！纽约市长白思豪宣布退出2020美国大选',
          categoryId: '国内信息',
          createDate: '2019-09-10 19:31:31',
          user:'超级管理员'
        }, ]
        }
    },
    methods:{
        handleSizeChange(val){
            console.log(val);
            
        },
        handleCurrentChange(val){
            console.log(val);
            
        },
        closeDialog(value){
            this.dislog_info=value
        }
    },
    components:{
        DialogInfo
    }
    
}
</script>

<style scoped lang="scss">
@import "../../styles/config.scss";
.label-wrap {
  &.category {
    @include labelDom(left, 60, 40);
  }
  &.date {
    @include labelDom(center, 93, 40);
  }
  &.key-work {
    @include labelDom(center, 100, 40);
  }
}
</style>