<template>
    <div>
        <div v-if="tree">
            <div v-for="(node, index) in tree" :key="node.id">
                <div class="conent">
                    <div class="conent-fill" @click="openDore(node, index)">
                        <svg
                            class="icon"
                            :class="{ rotate: node.open, transparent: !node.children }"
                            aria-hidden="true"
                        >
                            <use xlink:href="#icon-arrDnR-fill-copy"></use>
                        </svg>
                    </div>
                    <div
                        @click="nodeClick(node, index)"
                        class="buxuan"
                        :class="[node.selected === 0 ? 'buxuan' : node.selected === 1 ? 'banxuan' : 'quanxuan']"
                    ></div>
                    <span @click="openDore(node, index)">{{ node.label }}</span>
                </div>
                <div class="children" :class="{ open: node.open }">
                    <TreesNode :tree="node.children" :layers="layers + 1" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'TreesNode',
    data() {
        return {
            open: false,
        }
    },
    props: {
        tree: {
            type: Array,
        },
        layers: {
            type: Number,
        },
    },
    computed: {},
    mounted() {
        console.log('当前层=====================>', this.tree, '层数=====================>', this.layers)
    },
    methods: {
        nodeClick(node, index) {
            if (node.selected === 2 || node.selected === 1) {
                this.$set(node, 'selected', 0)
            } else {
                this.$set(node, 'selected', 2)
            }
            this.refreshAllParentNodes(this.$parent)
            this.refreshAllSonNodes(this.$children[index], node.selected)
        },
        refreshAllSonNodes(node, status) {
            if (node instanceof Vue && node.tree && node.$children) {
                node.tree.map((item) => {
                    this.$set(item, 'selected', status)
                })
                node.$children.map((nodes) => {
                    this.refreshAllSonNodes(nodes, status)
                })
            }
        },
        refreshAllParentNodes(node) {
            if (node instanceof Vue && node.tree) {
                if (node.$children) {
                    node.$children.map((nodes, index) => {
                        let status = 0
                        let buxuan = 0
                        let xuanzong = 0
                        if (nodes.tree) {
                            nodes.tree.map((item) => {
                                if (item.selected === 0) {
                                    buxuan++
                                } else if (item.selected === 2) {
                                    xuanzong++
                                }
                                if (buxuan === nodes.tree.length) {
                                    status = 0
                                } else if (xuanzong === nodes.tree.length) {
                                    status = 2
                                } else {
                                    status = 1
                                }
                                this.$set(node.tree[index], 'selected', status)
                            })
                        }
                    })
                }
                this.refreshAllParentNodes(node.$parent)
            }
        },
        openDore(node) {
            if (node.open) {
                this.$set(node, 'open', 0)
            } else {
                this.$set(node, 'open', 1)
            }
        },
    },
}
</script>

<style scoped>
.conent {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
}
.conent-fill {
    padding: 3px;
    box-sizing: border-box;
}
.conent-fill > .icon {
    width: 14px;
    height: 14px;
    transition: 0.3s ease-in-out;
}
.conent-fill > .transparent {
    color: transparent;
}
.rotate {
    transform: rotate(90deg);
}
.children {
    margin-left: 20px;
    max-height: 0;
    overflow: hidden;
    transition: 0.3s ease-in-out;
}
.open {
    max-height: 200px;
}
.buxuan {
    margin-right: 5px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}
.banxuan {
    background-color: #409eff;
}
.banxuan:before {
    content: '';
    position: absolute;
    display: block;
    background-color: #fff;
    height: 2px;
    transform: scale(0.5);
    left: 0;
    right: 0;
    top: 5px;
}
.quanxuan {
    background-color: #409eff;
    border-color: #409eff;
}
.quanxuan:after {
    box-sizing: content-box;
    content: '';
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 0.05s;
    transform-origin: center;
    transform: rotate(45deg) scaleY(1);
}
</style>
