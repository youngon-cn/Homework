    <template>
    <div id="nev">
        <div class="nev">
        <div class="books-category">
            <router-link to="/nve/goodbook1">首页</router-link>
        </div>
        <div class="books-category">
            <router-link to="/nve/goodbook2">科普</router-link>
        </div>
        <div class="books-category">
            <router-link to="/nve/goodbook3">人物</router-link>
        </div>
        <div class="books-category">
            <router-link to="/nve/goodbook4">历史</router-link>
        </div>
        <div class="books-category">
            <router-link to="/nve/goodbook5">人文</router-link>
        </div>
        <div class="books-category">
            <router-link to="/nve/goodbook6">名著</router-link>
        </div>
        <div class="books-category">
            <router-link to="/nve/leaveword">留言中心</router-link>
        </div>
         </div>
        <div >
            <router-view></router-view>
        </div>
    </div>
    </template>
    <script >
    export default {}
    </script>
    <style scoped>
    .nev{
        width: 100%;
        height: 100px;
        display: flex;
    }
    .books-category{
        flex: 1;
        text-align: center;
        line-height: 100px;
        font-size: 20px;
    }
    .router-link-active{
        color: gold;
    }
    </style>


