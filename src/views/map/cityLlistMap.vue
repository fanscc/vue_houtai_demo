<template>
  <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
    <p style="padding: 0 10px;">以下是使用 `bm-view` 组件渲染的百度地图实例</p>
    <!-- 比例尺寸 -->
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
    <!-- 缩放 -->
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <!-- 定位 -->
    <!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" showAddressBar="true" autoLocation="true"></bm-geolocation> -->
    <!-- 切换城市 -->
    <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
    <!-- 自定义控件 -->
    <bm-control>
      <button @click="addZoom(19)">缩放至最大</button>
      <button @click="addZoom(10)">还原</button>
      <button @click="addZoom(3)">缩放至最小</button>
      <button @click="addPolylinePoint(3)">添加一个点</button>
    </bm-control>
    <!-- 覆盖物 -->
    <!-- <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -50, height: 30}"/>
    </bm-marker> -->
    <!-- 路线 -->
    <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="1" :stroke-weight="5" :editing="true" @lineupdate="updatePolylinePath"></bm-polyline>
    <!-- 用来布局的 -->
    <bm-view style="width: 100%; height:400px; flex: 1"></bm-view>
  </baidu-map>
</template>

<script>
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
       polylinePath: [
        {lng: 116.404, lat: 39.915},
        {lng: 116.405, lat: 39.920},
        {lng: 116.423493, lat: 39.907445}
      ]
    };
  },
  created() {},
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
    addZoom(num) {
      this.zoom = num;
    },
    updatePolylinePath (e) {
      this.polylinePath = e.target.getPath();
      console.log(this.polylinePath);
    },
    addPolylinePoint () {
      this.polylinePath.push( {lng: 116.404, lat: 39.915} );
    }
  }
};
</script>

<style>
.map {
  width: 100%;
  height: 400px;
}
</style>
