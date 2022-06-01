<template>
    <div class="spu-selectbox">
        <!-- <p>{{simulatedDATA.title}}</p> -->
        <div>
            <!-- <a v-for="(item,index) in simulatedDATA.specifications" :key="index"> {{item.name}} ：{{select[index]}}</a> -->
            规格型号：<a v-for="(item, index) in select" :key="index"> {{ item.label }}</a>
        </div>
        <div v-for="(item, index) in typelist" :key="index" class="listbox">
            <div>{{ item.name }}:</div>
            <div class="commodity">
                <a
                    v-for="(items, indexs) in item.item"
                    :key="indexs"
                    :class="['content', { active: items.active }, { disable: items.disabled }]"
                    @click="selectTag(index, indexs, items)"
                    >{{ items.label }}</a
                >
            </div>
        </div>
    </div>
</template>
<script>
let simulatedDATA = {
    title: '手机',
    difference: [
        {
            id: '1',
            price: '200.00',
            stock: '59',
            difference: '128G,100,白色',
        },
        {
            id: '2',
            price: '200.00',
            stock: '19',
            difference: '128G,100,蓝色',
        },
        {
            id: '3',
            price: '200.00',
            stock: '0',
            difference: '128G,100,黑色',
        },
        {
            id: '4',
            price: '259.00',
            stock: '0',
            difference: '128G,200,白色',
        },
        {
            id: '5',
            price: '200.00',
            stock: '19',
            difference: '128G,200,蓝色',
        },
        {
            id: '6',
            price: '200.00',
            stock: '19',
            difference: '128G,200,黑色',
        },
        {
            id: '7',
            price: '259.00',
            stock: '19',
            difference: '256G,100,白色',
        },
        {
            id: '8',
            price: '590.00',
            stock: '0',
            difference: '256G,100,蓝色',
        },
        {
            id: '9',
            price: '200.00',
            stock: '19',
            difference: '256G,100,黑色',
        },
        {
            id: '10',
            price: '359.00',
            stock: '0',
            difference: '256G,200,白色',
        },
        {
            id: '11',
            price: '300.00',
            stock: '19',
            difference: '256G,200,蓝色',
        },
        {
            id: '12',
            price: '399.00',
            stock: '19',
            difference: '256G,200,黑色',
        },
    ],
    specifications: [
        {
            //这里是要被渲染字段
            name: '型号',
            item: [
                {
                    label: '128G',
                },
                {
                    label: '256G',
                },
            ],
        },
        {
            name: '尺寸',
            item: [
                {
                    label: '100',
                },
                {
                    label: '200',
                },
            ],
        },
        {
            name: '颜色',
            item: [
                {
                    label: '白色',
                },
                {
                    label: '蓝色',
                },
                {
                    label: '黑色',
                },
            ],
        },
    ],
}
export default {
    name: 'sku',
    data() {
        return {
            typelist: [], //渲染列表
            SkuList: [], //库存列表
            select: [], //已选列表
        }
    },
    components: {},
    mounted() {
        // this.start_list()
        this.skulist() //库存
        this.get_skulist() //渲染列表
        this.init()
    },
    methods: {
        init() {
            this.typelist.forEach((a) => {
                a.item.forEach((b) => {
                    if (!this.SkuList.flat(Infinity).includes(b.label)) {
                        b.disabled = true
                    } else {
                        b.disabled = false
                    }
                })
            })
        },
        get_skulist() {
            // 提出渲染列表
            simulatedDATA.specifications.forEach((res) => {
                res.item.forEach((i) => {
                    i.disabled = false
                    i.active = false
                })
            })
            this.typelist = simulatedDATA.specifications
        },
        skulist() {
            // 库存列表
            let arr = simulatedDATA.difference
            let pro_all_in = []
            arr.forEach((item) => {
                if (item.stock != '0') {
                    pro_all_in.push(item['difference'].split(','))
                }
            })
            this.SkuList = pro_all_in
        },
        optionsHandle(sel, data) {
            let arr = []
            sel.map((item) => {
                arr.push(item.label)
            })
            this.SkuList.map((i) => {
                // console.log(
                //   i,
                //   arr,
                //   this.isContained(i, arr),
                //   this.typelist[data.index]['item'][data.tagindex].label
                // )
                if (this.isContained(i, arr)) {
                    this.typelist[data.index]['item'][data.tagindex].disabled = false
                }
            })
        },
        isContained(aa, bb) {
            // 全部的 ，  选中的
            //判断aa数组是否 全 包含bb数组
            //   console.log(aa,bb)
            if (!(aa instanceof Array) || !(bb instanceof Array) || aa.length < bb.length) {
                return false
            }
            let aaStr = aa.toString()
            for (var i = 0; i < bb.length; i++) {
                // console.log(aaStr, '-----', bb[i], aaStr.indexOf(bb[i]) < 0)
                if (aaStr.indexOf(bb[i]) < 0) {
                    //小于 0 没有
                    return false
                }
            }
            return true
        },
        filter(arr = []) {
            return arr.filter(function (s) {
                return s && s.trim()
            })
        },
        selectTag(index, tagindex, item) {
            if (item.disabled == true) return //不可选直接跳过
            let select = this.select //已选列表
            let typelist = this.typelist //渲染列表
            //   let SkuList = this.SkuList //库存列表
            if (item.active) {
                typelist[index]['item'][tagindex].active = false
                select.forEach((a, i) => {
                    if (a.index == index) {
                        select.splice(i, 1)
                    }
                })
            } else {
                typelist[index]['item'].forEach((a) => {
                    a.active = false
                })
                typelist[index]['item'][tagindex].active = true
                select.forEach((a, i) => {
                    if (a.index == index) {
                        select.splice(i, 1)
                    }
                })
                select.push({ label: item.label, index, tagindex })
            }
            select.sort(function (a, b) {
                return a.index - b.index
            })
            let x_selected = []
            select.forEach((item) => {
                x_selected.push(item.index)
            })
            if (select.length == 0) {
                //没选就重新渲染下
                this.init()
            } else {
                typelist.forEach((el, idx) => {
                    el.item.forEach((pro, index) => {
                        if (!pro.active) {
                            pro.disabled = true
                        }
                        let data = {
                            label: pro.label,
                            index: idx,
                            tagindex: index,
                        }
                        // console.log(x_selected,idx)
                        // console.log(x_selected.indexOf(idx))
                        if (x_selected.indexOf(idx) > -1) {
                            let sel = select.slice()
                            let c = x_selected.indexOf(idx)
                            sel.splice(c, 1, data)
                            this.optionsHandle(sel, data)
                        } else {
                            let sel = select.slice()
                            sel.push(data)
                            this.optionsHandle(sel, data)
                        }
                    })
                })
            }
            // this.$forceUpdate()
        },
    },
}
</script>
<style　scoped>
.spu-selectbox {
    padding: 10px;
    color: #333;
}
.listbox {
    /* display: flex;
  align-items: center; */
    padding: 10px 0;
}
.commodity {
    padding-left: 15px;
    margin-top: 5px;
}
.content {
    display: inline-block;
    padding: 3px 5px;
    margin: 0 5px;
    box-sizing: border-box;
    background: #ebebeb;
    border-radius: 8px;
    border: 1px solid transparent;
}
.active {
    border: 1px solid rgb(194, 63, 63);
}
.disable {
    background: #f3f3f3;
    color: #999;
}
</style>
