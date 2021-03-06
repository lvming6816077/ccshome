var chartyou = echarts.init(document.getElementById('youMap'));
var chartmei = echarts.init(document.getElementById('meiMap'));

var wenliImage = new Image().src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAABKADAAQAAAABAAAABAAAAADFbP4CAAAAL0lEQVQIHWN8/PgxJwMDgxAQg8A7FiAh9OvXL2YQj42NTYgJxEAGIBXvQDJQwXcAg24I5a1jPH8AAAAASUVORK5CYII='

var beijingicon = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAwCAMAAABDh1hgAAAAilBMVEUAAADpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVnpWVlIUkd2AAAALXRSTlMABC0V9wvl+/GxNBrc1KqYXCfhzb2kf3ltCNmSdGVTS0M7H+rnxLaca6aJgg+LLX/9AAABU0lEQVQ4y33U6XaDIBAF4It7NKl1S2L2Peky7/96bUnDgALfPzj3OMiMYqDI8yCEU7VoI/pznmytsfxGmqg8YSAuaSDaCOiCGY21erVjRjYzzgScGGTi1zmm5PKGp5Lc3p9lyCPp8WtCPksARUqs2VZhsKn1EwNYEltA6jtigVFnjn9C29wAiVpMBTc8Ursd4vFDzHdocOLIHmyhdmtUHDmC8UskKPSbZGs+IUSqNUQR3LYrsFKLNFCRd1JK4M6rVYGnPDPK74nVO1nlEfFWGgLiYnT2o5xko4mZk89BDt3Fk2ghPdyJqIIkGmfkS32IrsS05+t2nlX5TqyJDpqdLZGF0N0skS0Mp2iUuAowc8y47wNiRqZPjBzNRB1j7G5E9rAIz4MZYLZpzArYtdr/wKF6XU4jYMUDmOZw6lcysobHQY54DJ+OiHbwChO+Epc4EDD9ALq3mhVp89lCAAAAAElFTkSuQmCC'
// 获取地图中起点和终点的坐标，以数组形式保存下来
var convertData = function(data) {
    var coord = []
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem.name];

        coord.push(fromCoord)
        console.log(coord,dataItem)

    }
    
    var r = {
        coords:coord
    }
    return r;
}
var geoCoordMap = {
    //东盟十国
    '广州': [113.5107, 23.2196],
    '马来西亚': [101.975766, 4.210484],
    '印度尼西亚': [113.921327, -0.789275],
    '泰国': [100.992541, 15.870032],
    '菲律宾': [121.774017, 12.879721],
    '文莱': [114.727669, 4.535277],
    '越南': [108.277199, 14.058324],
    '老挝': [102.495496, 19.85627],
    '缅甸': [95.956223, 21.913965],
    '柬埔寨': [104.990963, 12.565679],
    '新加坡': [103.51, 1.17],
    '日本':[139.46,35.42],
    '韩国':[126.9,37.51],
    '南非':[21.9090193,-33.5455855],
    //一带一路
    '广州': [113.5107, 23.2196],
    '中国': [116.40, 39.90],
    '蒙古': [103.846656, 46.862496],
    '俄罗斯': [105.318756, 61.52401],
    '东帝汶': [125.727539, -8.874217],
    '印度': [78.96288, 20.593684],
    '巴基斯坦': [69.34511599999999, 30.375321],
    '孟加拉国': [90.356331, 23.684994],
    '斯里兰卡': [80.77179699999999, 7.873053999999999],
    '阿富汗': [67.709953, 33.93911],
    '尼泊尔': [84.12400799999999, 28.394857],
    '马尔代夫': [73.5, 4.2],
    '不丹': [90.433601, 27.514162],
    '沙特阿拉伯': [45.079162, 23.885942],
    '阿联酋': [53.847818, 23.424076],
    '阿曼': [55.923255, 21.512583],
    '伊朗': [53.688046, 32.427908],
    '土耳其': [35.243322, 38.963745],
    '以色列': [34.851612, 31.046051],
    '埃及': [30.802498, 26.820553],
    '科威特': [47.481766, 29.31166],
    '伊拉克': [43.679291, 33.223191],
    '卡塔尔': [51.183884, 25.354826],
    '约旦': [36.238414, 30.585164],
    '黎巴嫩': [35.862285, 33.854721],
    '巴林': [50.36, 26.12],
    '也门': [48.516388, 15.552727],
    '叙利亚': [38.996815, 34.80207499999999],
    '巴勒斯坦': [34.28, 31.30],
    '波兰': [19.145136, 51.919438],
    '罗马尼亚': [24.96676, 45.943161],
    '捷克共和国': [15.472962, 49.81749199999999],
    '斯洛伐克': [19.699024, 48.669026],
    '保加利亚': [25.48583, 42.733883],
    '匈牙利': [19.503304, 47.162494],
    '拉脱维亚': [24.603189, 56.879635],
    '立陶宛': [23.881275, 55.169438],
    '斯洛文尼亚': [14.995463, 46.151241],
    '爱沙尼亚': [25.013607, 58.595272],
    '克罗地亚': [15.2, 45.1],
    '阿尔巴尼亚': [20.168331, 41.153332],
    '塞尔维亚': [21.005859, 44.016521],
    '马其顿': [21.745275, 41.608635],
    '波黑': [43.52, 18.26],
    '黑山': [19.37439, 42.708678],
    '哈萨克斯坦': [66.923684, 48.019573],
    '乌兹别克斯坦': [64.585262, 41.377491],
    '土库曼斯坦': [59.556278, 38.969719],
    '吉尔吉斯斯坦': [74.766098, 41.20438],
    '塔吉克斯坦': [71.276093, 38.861034],
    '乌克兰': [31.16558, 48.379433],
    '白俄罗斯': [27.953389, 53.709807],
    '格鲁吉亚': [43.356892, 42.315407],
    '阿塞拜疆': [47.576927, 40.143105],
    '亚美尼亚': [45.038189, 40.069099],
    '摩尔多瓦': [28.369885, 47.411631],
    '巴西':[-48.0073971,-15.7215857],
    '厄瓜多尔':[-86.1396223,-1.3528886],
    //欧美国家
    '挪威': [8.468945999999999, 60.47202399999999],
    '丹麦': [9.501785, 56.26392],
    '瑞典': [18.643501, 60.12816100000001],
    '芬兰': [25.748151, 61.92410999999999],
    '英国': [-3.435973, 55.378051],
    '荷兰': [5.291265999999999, 52.132633],
    '爱尔兰': [-8.24389, 53.41291],
    '比利时': [4.469936, 50.503887],
    '卢森堡': [6.129582999999999, 49.815273],
    '法国': [2.213749, 46.227638],
    '西班牙': [-3.74922, 40.46366700000001],
    '葡萄牙': [-8.224454, 39.39987199999999],
    '德国': [10.451526, 51.165691],
    '奥地利': [14.550072, 47.516231],
    '瑞士': [8.227511999999999, 46.818188],
    '美国': [-95.712891, 37.09024],
    '加拿大': [-102.646409, 59.994255],
    '澳大利亚': [133.775136, -25.274398],
    '新西兰': [174.885971, -40.900557]
};

var pathArr = [{"name":"俄罗斯","size":24},{"name":"日本","size":6},{"name":"韩国","size":6},{"name":"菲律宾","size":6},{"name":"澳大利亚","size":6},{"name":"印度尼西亚","size":6},{"name":"文莱","size":6},{"name":"马来西亚","size":6},{"name":"柬埔寨","size":6,position:'left'},{"name":"越南","size":6},{"name":"泰国","size":6},{"name":"孟加拉国","size":6},{"name":"印度","size":6},{"name":"巴基斯坦","size":6},{"name":"哈萨克斯坦","size":6},{"name":"阿联酋","size":6},{"name":"南非","size":6},{"name":"美国","size":6},{"name":"加拿大","size":6},{"name":"俄罗斯","size":10}]
var sdata = []
for (var i = 0 ; i < pathArr.length-1 ; i++) {
    var r = []
    r.push({name:pathArr[i].name})
    r.push({name:pathArr[i+1].name})
    sdata.push(convertData(r))
}
var pathYouArr = [{"name":"俄罗斯","size":24},{"name":"日本","size":6},{"name":"韩国","size":6},{"name":"菲律宾","size":6},{"name":"澳大利亚","size":6},{"name":"印度尼西亚","size":6},{"name":"新加坡","size":6},{"name":"马来西亚","size":6},{"name":"越南","size":6},{"name":"印度","size":6},{"name":"阿联酋","size":6,"position":"bottom"},{"name":"卡塔尔","size":6},{"name":"巴西","size":6},{"name":"厄瓜多尔","size":6},{"name":"美国","size":6},{"name":"加拿大","size":6},{"name":"比利时","size":6,"position":"bottom"},{"name":"荷兰","size":6},{"name":"挪威","size":6},{"name":"俄罗斯","size":10}]
var sdatayou = []
for (var i = 0 ; i < pathYouArr.length-1 ; i++) {
    var r = []

    r.push({name:pathYouArr[i].name})
    r.push({name:pathYouArr[i+1].name})

    sdatayou.push(convertData(r))
}

// 油品地图
var optionyou = {
    backgroundColor: 'transparent',
    title: {
        //text: '中国国际贸易促进委员会',
        //subtext: '国别资讯',
        textStyle: {
            color: '#fff',
            fontSize: 20
        },
        top: '10px',
        left: '10px'
    },
    geo: {
        map: 'world', // 与引用进来的地图js名字一致
        roam: false, // 禁止缩放平移
        zoom:1,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: { // 每个区域的样式
            borderWidth:0,
            normal: {
                areaColor:'#196bba',
                borderColor: '#196bba',
                
            },
        },
        emphasis:{
            disabled:true,
            // itemStyle: {
            //     // color: '#333FFF',
            //     shadowBlur: 20,//发光图形阴影的模糊大小
            //     shadowColor: 'rgba(0, 147, 252, 1)'//阴影颜色
            // }
        },
        regions: [{ // 选中的区域
            name: 'China',
            itemStyle: { // 高亮时候的样式
                areaColor: '#00deff',
                borderColor: '#00deff',
                
            },
            label: { // 高亮的时候不显示标签
                emphasis: {
                    show: false
                }
            }
        }]
    },
    series: [{
        type: 'scatter',
        coordinateSystem: 'geo',
        itemStyle: {
          normal: {
            opacity: 1,
          },
        },
        symbol: beijingicon,
        symbolSize: [17, 24],


        data:[[116.4, 39.9]],
        zlevel: 9,

    },{
        type: 'map',
        map: 'world',
        zlevel: 2,
        itemStyle: { // 每个区域的样式
            borderWidth:0,
            normal: {
                areaColor: {
                  image: wenliImage, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                  repeat: 'repeat' // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
                },
                borderWidth:0,
                borderColor: '#196bba',
                
            },
        },
        emphasis:{
            disabled:true,
        },

    },{
        // 白色航线特效图
        type: 'lines',
        zlevel: 3, // 用于分层，z-index的效果
        // effect: {
        //     show: true, // 动效是否显示
        //     period: 6, // 特效动画时间
        //     trailLength: 0.7, // 特效尾迹的长度
        //     color: 'red', // 特效颜色
        //     symbolSize: 3 // 特效大小
        // },
        // polyline:true,
        lineStyle: {
            normal: { // 正常情况下的线条样式
                color: '#01519e',
                opacity: 1,
                width: 1, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: 0.4 // 线条曲度
            }
        },
        data:sdatayou // 特效的起始、终点位置
    },{ // 散点效果
        type: 'effectScatter',
        coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
        zlevel: 4,
        rippleEffect: {
            brushType: 'fill', // 波纹绘制效果
            scale:8,
            number:2,
            period: 10
        },
        label: {
            normal: { // 默认的文本标签显示样式
                show: true,
                color:'#196bba',
                textBorderColor:'#fff',
                textBorderWidth:3,
                position: 'top', // 标签显示的位置
                formatter: '{b}' // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: '#00deff'
            }
        },
        data: pathYouArr.slice(1).map(function(dataItem) {
            return {
                name: dataItem.name,
                value: geoCoordMap[dataItem.name], // 起点的位置
                symbolSize: dataItem.size, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
                label:{
                    position:dataItem.position || 'top'
                }
            };
        })
    }], // 将之前处理的数据放到这里
}
// 煤炭地图
var optionmei = {
    backgroundColor: 'transparent',
    title: {
        //text: '中国国际贸易促进委员会',
        //subtext: '国别资讯',
        textStyle: {
            color: '#fff',
            fontSize: 20
        },
        top: '10px',
        left: '10px'
    },
    geo: {
        map: 'world', // 与引用进来的地图js名字一致
        roam: false, // 禁止缩放平移
        zoom:1,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: { // 每个区域的样式
            borderWidth:0,
            normal: {
                areaColor:'#196bba',
                borderColor: '#196bba',
                
            },
        },
        emphasis:{
            disabled:true,
            // itemStyle: {
            //     // color: '#333FFF',
            //     shadowBlur: 20,//发光图形阴影的模糊大小
            //     shadowColor: 'rgba(0, 147, 252, 1)'//阴影颜色
            // }
        },
        regions: [{ // 选中的区域
            name: 'China',
            itemStyle: { // 高亮时候的样式
                areaColor: '#05ac7b',
                borderColor: '#05ac7b',
                
            },
            label: { // 高亮的时候不显示标签
                emphasis: {
                    show: false
                }
            }
        }]
    },
    series: [{
        type: 'scatter',
        coordinateSystem: 'geo',
        itemStyle: {
          normal: {
            opacity: 1,
          },
        },
        symbol: beijingicon,
        symbolSize: [17, 24],


        data:[[116.4, 39.9]],
        zlevel: 9,

    },{
        type: 'map',
        map: 'world',
        zlevel: 2,
        itemStyle: { // 每个区域的样式
            borderWidth:0,
            normal: {
                areaColor: {
                  image: wenliImage, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                  repeat: 'repeat' // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
                },
                borderWidth:0,
                borderColor: '#196bba',
                
            },
        },
        emphasis:{
            disabled:true,
        },

    },{
        // 白色航线特效图
        type: 'lines',
        zlevel: 3, // 用于分层，z-index的效果
        // effect: {
        //     show: true, // 动效是否显示
        //     period: 6, // 特效动画时间
        //     trailLength: 0.7, // 特效尾迹的长度
        //     color: 'red', // 特效颜色
        //     symbolSize: 3 // 特效大小
        // },
        // polyline:true,
        lineStyle: {
            normal: { // 正常情况下的线条样式
                color: '#08ad7c',
                opacity: 1,
                width: 1, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: 0.4 // 线条曲度
            }
        },
        data:sdata // 特效的起始、终点位置
    },{ // 散点效果
        type: 'effectScatter',
        coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
        zlevel: 4,
        rippleEffect: {
            brushType: 'fill', // 波纹绘制效果
            scale:8,
            number:2,
            period: 10
        },
        label: {
            normal: { // 默认的文本标签显示样式
                show: true,
                color:'#196bba',
                textBorderColor:'#fff',
                textBorderWidth:3,
                position: 'top', // 标签显示的位置
                formatter: '{b}' // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: '#06ce93'
            }
        },
        data: pathArr.slice(1).map(function(dataItem) {
            return {
                name: dataItem.name,
                value: geoCoordMap[dataItem.name], // 起点的位置
                symbolSize: dataItem.size, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
                label:{
                    position:dataItem.position || 'top'
                }
            };
        })
    }], // 将之前处理的数据放到这里
}

chartyou.setOption(optionyou);
chartmei.setOption(optionmei);
$('#meiMap').css('opacity','0')




