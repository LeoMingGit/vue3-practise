<template>
    <transition name="fade-in">
        <div class="confirm" v-show="show" @click.stop>
            <div class="confirm-box">
                <div class="confirm-title">{{content}}</div>
                <div class="confirm-operation">
                    <div v-if="showCancel" class="confirm-operation-btn confirm-operation-cancel" @click="cancel()">{{cancelText}}</div>
                    <div class="confirm-operation-btn confirm-operation-confirm" @click="confirm()">{{confirmText}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
		name: 'vue-confirm',
        data() {
            return {
                content:'',
                cancelText:'',
                confirmText:"",
                showCancel:"",
                show:''
            }
        },
        methods:{
            confirm(){
                this.$emit('confirm');
                this.show=false;
            },
            cancel(){
                 this.$emit('cancel');
                 this.show=false;
            }
        }
    }
</script>

<style scoped="scoped">
    .confirm{position: fixed; z-index: 999999; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; left: 0; top: 0; background-color: rgba(0,0,0,0.5);}
    .confirm-box{width: 250px; background-color: #fff; border-radius: 8px; overflow: hidden; box-sizing: border-box;}
    .confirm-title{padding: 20px 10px 15px; box-sizing: border-box; font-size: #333; font-size: 16px; text-align: center; word-break: break-all;}
    .confirm-operation{height: 45px; width: 100%; border-top: 1px solid #eee; box-sizing: border-box; display: flex; align-items: center; }
    .confirm-operation-btn{width: 50%; height: 100%; font-size: 16px; color: #444; box-sizing: border-box; flex-grow: 1; display: flex; align-items: center; justify-content: center;}
    .confirm-operation-cancel{border-right: 1px solid #eee; color: #999;}
    .confirm-operation-confirm{color: slateblue;}

    .fade-in-enter-active{
        animation: fadein 0.3s;
    }

    .fade-in-enter-active .confirm-box{
        animation: zoomin 0.4s;
    }


    @keyframes fadein{
        from{opacity: 0;}
        to{opacity: 1;}
    }
    @keyframes zoomin{
        0%{transform: scale(0);}
        50%{transform: scale(1.1);}
        100%{transform: scale(1);}
    }
</style>
