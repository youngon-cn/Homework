# Homework
> 站员作业

### 目录结构
例子:

  - 2015届 // 届别
    - XX作业 // 作业标题
      - 姓名 // 文件夹
        - files

### 提交流程
  1. 克隆仓库至本地 `git clone https://github.com/youngon-cn/Homework.git`
  > 已克隆过的执行 `git pull` 来与远程仓库同步

  2. `git checkout -b 'branch-name'`
  > 'branch-name' 不知道写什么的直接写自己名字的首字母缩写就行

  > e.g. `git checkout -b cmy`

  3. **按照示例格式添加作业文件**

  4. 提交修改到暂存区 `git add .`

  5. 提交修改到本地库 `git commit -m 'your-commit-info'`

  6. 提交修改到远程库 `git push --set-upstream origin 'branch-name'`

  7. 通过 github 网站发起 pull request

  8. pull request 被合并后，切换回主分支 `git checkout master`，同时在 github 上删除掉被合并了的分支

### Git Flow（[详细介绍](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)）
