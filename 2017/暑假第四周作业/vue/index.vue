		<meta charset="utf-8" />
		<div id="values">
			soso <input v-model="inputsvalue" class='inp'/>
			<div class="teable">
			<my-vue :names='datalist' :keys='inputsvalue' :column='columns'></my-vue>
			</div><br/>
			<input  v-on:click="add" type="button" value="add"/>
			<input  v-on:click="close" type="button" value="close"/>
			<div v-bind:class="{'die': dies}">
			<my-component ></my-component>
			</div>
		</div>
		
		<template id='adds'>
			姓名<input v-model="na"/><br/>
			年龄<input v-model="ag"/><br/>
			性别<select v-model="se">
				<option>Male</option>
				<option>Female</option>
			</select>
			<button v-on:click="going">确定</button>
		</template>
		
		
		<template id="Table">
			<table width="500px" border="1">
				<tr>
					<th v-for="item in column">
						{{item.name | capitalize}}
					</th>
					<th>Delete</th>
					<th>view</th>
				</tr>
				<tr v-for="(index,ins) in names | filterBy keys">
					<td v-for="into in column">
						{{ins[into.name]}}
					</td>
					<td v-on:click="display(index)">
						Delete
					</td>
					<td v-on:click="viwe(index)">
						view
					</td>
				</tr>
			</table>
			<div :class="{'information': arise,'inform' : true}">
				<div :class="{'infor': ari}" >
					name:{{nam}}<br />
					Age :{{Ag}}<br />
					Sex :{{Se}}<br />
				<input type="button" v-on:click="noarise" value="确定"/>
				</div>
			</div>
		</template>
		
		<script src="js/vue1.js"></script>
		<script>
			Vue.component('my-component',{
				template : '#adds',
				data : function(){
					return {
						na : "",
						ag : "",
						se : ""
					}
					
				},
				methods : {
					going : function(){
						if(this.na !== "" && this.ag !== "" && this.se !== ""){
						this.$parent.dies=true,
						this.$parent.datalist.push({'name' : this.na,'age' : this.ag,'sex' : this.se}),
						this.na="",
						this.ag="",
						this.se=""
						}else{
							alert('你还没有填完')
						}
					},
				}
			})
			
			Vue.component('my-vue',{
				template : '#Table',
				props : ['names','keys','column'],
				data : function(){
					return {
						arise : false,
						ari:false,
						nam : '',
						Ag:'',
						Se:''
						
					}
				},
				methods : {
					display : function(index){
						this.names.splice(index,1)
					},
					viwe : function(index){
						this.arise=true,
						this.ari=true,
						this.nam=this.names[index].name,
						this.Ag=this.names[index].age,
						this.Se=this.names[index].sex
						console.log(this.nam)
					},
					noarise : function(){
						this.arise=false,
						this.ari=false
					}
					
				}
		
			})
			
			new Vue({
				el : '#values',
				
				data : {
					dies : true ,
				    inputsvalue : '',
					columns: [{
		                name: 'name'
		            }, {
		                name: 'age'
		            }, {
		                name: 'sex'
		            }],
		            datalist: [{
		                name: 'karu',
		                age: 30,
		                sex: 'Male'
		            }, {
		                name: 'ouwen',
		                age: 26,
		                sex: 'Male'
		            }, {
		                name: 'chunk',
		                age: 22,
		                sex: 'Female'
		            }, {
		                name: '张三',
		                age: 36,
		                sex: 'Male'
		            },
		             {
		                name: '李四',
		                age: 36,
		                sex: 'Male'
		            },
		            {
		                name: '王五',
		                age: 31,
		                sex: 'Male'
		            },
		            {
		                name: '李三',
		                age: 21,
		                sex: 'Male'
		            }]
				},
				
				methods : {
					add :function(){
						this.dies=false
					},
					close :function(){
						this.dies=true
					}
				}
			})
		</script>
		 
		
		<style>
			#values{
				cursor: pointer;
				height: 500px;
				width: 500px;
				margin: 0 auto;
			}
			.die{
				display: none;
			}
			.inp{
				width: 350px;
				height: 30px;
			}
			.infor{
				left: 48%;
				top: 100px;
				position: fixed;
				height: 300px;
				width: 300px;
				font-size: 30px;
				background-color: rgba(0,0,0,0.4);
				text-align: center;
				color: white;
				line-height: 60px;
			}
			.information{
				position: absolute;
				background-color: rgba(0,0,0,0.4);
				    top: 0;
				    bottom: 0;
				    right: 0;
				    left: 0;
				z-index: 1000;
				display: block!important;
			}
			.inform{
				display: none;
			}
			.teable{
				margin-top: 50px;
			}
		</style>