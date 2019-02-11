
js 实现滚动进度条 (vue)


touchstart： 当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。

touchmove：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。

touchend：当手指从屏幕上离开的时候触发。


touches: 当前屏幕上所有触摸点的列表;

targetTouches: 当前对象上所有触摸点的列表;

changedTouches: 涉及当前(引发)事件的触摸点的列表


clientX：触摸目标在视口中的x坐标。

clientY：触摸目标在视口中的y坐标。

pageX：触摸目标在页面中的x坐标。

pageY：触摸目标在页面中的y坐标。

screenX：screenX：触摸目标在屏幕中的x坐标。

screenY：screenX：触摸目标在屏幕中的x坐标。

identifier：标识触摸的唯一ID。

target：screenX：触摸目标在屏幕中的x坐标。




        Vue.component('filterToast-component',{
            props:['isshow'],
            data:function(){

                var defaultFilter = {
                    priceRange: {
                        min: 0,
                        max: 88
                    },
                    ggtype:{dg:false,ecy:false,scy:false},
                    hbtype:{hit:false,notHit:false},
                    publictype: {open:false,notOpen:false}
                };
                // if(localStorage){
                //     var filter = localStorage.getItem('cxh_jz_filter');
                //     if(filter){
                //         filter = JSON.parse(filter);
                //     }else{
                //         filter = JSON.parse(JSON.stringify(defaultFilter));
                //     }
                // }
                var filter = JSON.parse(JSON.stringify(defaultFilter));
                    return {
                    filter:filter,
                    defaultFilter: defaultFilter,
                    touchPoint:{
                        minBtnLeft: 0,
                        maxBtnRight: 0
                    }
                }
            },
            template: '<div class="popup popup_fliter forapptogetregion" v-if="isshow">\
                            <div class="layer" @click="close"></div>\
                            <div class="popup_con">\
                                <div class="tit">筛选竞足文章</div>\
                                <div class="bottom_content">\
                                    <div class="scroll_content">\
                                        <div class="fliter_item">\
                                            <div class="subtit">价格区间（元）</div>\
                                            <div class="price_progress_wrap">\
                                                <span class="num_min red" v-show="filter.priceRange.min==0 && filter.priceRange.max<8">免费</span>\
                                                <div class="price_progress">\
                                                    <span class="btn_min" @touchmove="btnMinTouchMove" :style="{left:touchPoint.minBtnLeft}">\
                                                    <em v-show="!(filter.priceRange.min==0 && filter.priceRange.max<8)">{{filter.priceRange.min}}</em>\
                                                    </span>\
                                                    <span class="progress" :style="{left: touchPoint.minBtnLeft,right: touchPoint.maxBtnRight}"></span>\
                                                    <span class="btn_max" @touchmove="btnMaxTouchMove" :style="{right: touchPoint.maxBtnRight}">\
                                                    <em v-show="!(filter.priceRange.min==0 && filter.priceRange.max<8)">{{filter.priceRange.max}}</em></span>\
                                                </div>\
                                                <span class="num_max hide">88</span>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div class="bottom">\
                                        <span class="btn_reset" @click="toReset">重置</span>\
                                        <span class="btn_submit" @click="close(filter)">确定</span>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>',
            updated: function(){
                if(this.isshow){
                    var progressWidth = document.querySelector('.popup_fliter .price_progress').clientWidth;
                    this.touchPoint.minBtnLeft = this.filter.priceRange.min / 88 * progressWidth + 'px';
                    this.touchPoint.maxBtnRight = (progressWidth - this.filter.priceRange.max / 88 * progressWidth) + 'px';
                }
            },
            methods:{
                btnMinTouchMove: function(e){
                    this.progressLeft('min',e);
                },
                btnMaxTouchMove: function(e){
                    this.progressLeft('max',e);
                },

                //根据touch元素的clientX值来进行设置style left right值
                progressLeft: function (type,ele) {
                    ele.preventDefault();
                    var touchEle = ele.touches[0],
                        btnLeft = touchEle.clientX,
                        progressWidth = document.querySelector('.popup_fliter .price_progress').clientWidth;

                    if(type == 'min'){
                        var min = parseInt(btnLeft/progressWidth*88);
                        if(min > (this.filter.priceRange.max-7) || min < 0){
                            return false;
                        }else{
                            this.filter.priceRange.min = parseInt(btnLeft/progressWidth*88);
                            //left add px
                            this.touchPoint.minBtnLeft = btnLeft + 'px';
                        }
                    }else{
                        var max = parseInt(btnLeft/progressWidth*88);
                        if(max < (this.filter.priceRange.min+7) || max > 88){
                            return false;
                        }else{
                            this.filter.priceRange.max = parseInt(btnLeft/progressWidth*88);
                            //left add px
                            this.touchPoint.maxBtnRight = (progressWidth - btnLeft) + 'px';
                        }
                    }
                },
            }

        })

