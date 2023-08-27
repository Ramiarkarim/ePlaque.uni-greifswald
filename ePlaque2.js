(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ePlaque2_atlas_1", frames: [[0,0,1080,608]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BackgroundePlaque = function() {
	this.initialize(ss["ePlaque2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmWGXIAAstIJ3AAIC2AAIAAMtgAkxEzIJkAAIAAidIgBAAIAAnHIijAAInAAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmWGXIAAstIJ3AAIC2AAIAAMtgAkxEzIJkAAIAAidIgBAAIAAnHIijAAInAAAg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah0EFIiPiPIAAhTIAygxIBnBmIEllcIAlAAIAkAeIAABUIlXGXg");
	this.shape_2.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AmWGXIAAstIJ3AAIC2AAIAAMtg");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-40.7,81.4,81.5);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACdAvQgLgLAAgUQAAgUALgMQALgLASAAQAQAAAJAKQAJAKAAAQIAAAIIg8AAQAAAHACAFQACAGAEAEQAEADAFACQAFACAHAAQAIAAAIgDQAJgEADgDIACAAIAAAPIgPAFQgHACgIAAQgVAAgLgLgACngJQgGAHgBAIIAuAAQABgKgGgGQgFgFgLgBQgMABgGAGgAhiA3QgHgDgFgFQgGgFgDgIQgCgIAAgLQAAgTALgMQAKgLATABQAHAAAHABQAGACAGADIAAAPIgBAAQgGgEgGgDQgIgDgGAAQgMAAgGAIQgHAHAAAPQAAAPAGAIQAHAIAMAAIAIgBIAJgDIAFgEIAEgCIABAAIAAAPIgNAFQgGACgHAAQgJAAgIgDgAjIAvQgLgLABgUQgBgUALgMQALgLASAAQAQAAAJAKQAKAKgBAQIAAAIIg8AAQAAAHADAFQACAGADAEQAFADAFACQAFACAHAAQAHAAAJgDQAJgEADgDIABAAIAAAPIgPAFQgGACgIAAQgVAAgMgLgAi+gJQgGAHgBAIIAvAAQAAgKgFgGQgFgFgMgBQgLABgHAGgAEnA4IAAguIAAgKQAAgFgCgDQgCgDgEgCQgDgBgGAAQgFAAgGADQgGACgGAFIAAA8IgOAAIAAhRIAOAAIAAAJQAHgFAGgDQAHgDAIAAQAMAAAIAIQAGAIABAOIAAA1gABvA4IAAguIAAgKQgBgFgCgDQgCgDgDgCQgDgBgGAAQgGAAgGADQgGACgGAFIAAA8IgNAAIAAhRIANAAIAAAJQAHgFAHgDQAGgDAIAAQANAAAHAIQAHAIAAAOIAAA1gAAQA4IAAguIgBgKQAAgFgCgDQgCgDgDgCQgEgBgEAAQgGAAgGADQgGACgFAFIAAA8IgPAAIAAhxIAPAAIAAApQAGgFAGgDQAIgDAGAAQANAAAHAIQAHAIAAAOIAAA1gAjtA4IgkgsIgVAAIAAAsIgOAAIAAhsIAeAAQAKAAAGABQAIACAEADQAHADADAHQADAFAAAIQAAANgGAHQgGAHgKAFIApAvgAkmABIAPAAIAMgBQAFgBADgDQAEgDABgEQACgEAAgHQAAgEgCgEQgCgEgDgCQgDgCgEgBIgLgBIgRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("ACdAvQgLgLAAgVQAAgSALgMQALgMARAAQARAAAJAJQAJALAAAQIAAAHIg8AAQAAAIACAGQACAFAEAEQAEAEAFABQAGACAGAAQAIAAAIgEQAJgDAEgDIABAAIAAAPIgPAFQgHACgIAAQgVAAgLgLgACngJQgHAGAAAJIAuAAQABgKgGgGQgFgGgLABQgMgBgGAHgAhhA4QgIgEgFgEQgGgGgDgIQgCgIAAgLQAAgTALgLQAKgMATAAQAHABAHACQAGABAGADIAAAQIgBAAQgGgFgGgDQgIgDgGAAQgMAAgGAIQgHAHAAAPQAAAPAGAIQAHAIAMAAIAIgBIAIgDIAGgDIAEgEIABAAIAAAQIgNAFQgGACgHAAQgJAAgHgCgAjIAvQgLgLAAgVQAAgSALgMQALgMASAAQARAAAIAJQAKALgBAQIAAAHIg7AAQAAAIACAGQACAFADAEQAFAEAFABQAFACAHAAQAHAAAJgEQAJgDADgDIABAAIAAAPIgPAFQgHACgHAAQgVAAgMgLgAi+gJQgGAGAAAJIAuAAQAAgKgGgGQgEgGgMABQgLgBgHAHgAEnA4IAAguIAAgKQAAgFgCgDQgCgDgEgCQgDgBgGAAQgFAAgHADQgFADgGAEIAAA8IgOAAIAAhRIAOAAIAAAKQAGgGAHgDQAHgDAIAAQANAAAGAIQAIAIAAAOIAAA1gABvA4IAAguIAAgKQgBgFgCgDQgBgDgEgCQgDgBgGAAQgFAAgHADQgGADgGAEIAAA8IgNAAIAAhRIANAAIAAAKQAHgGAHgDQAGgDAIAAQANAAAHAIQAHAIAAAOIAAA1gAAQA4IAAguIgBgKQAAgFgCgDQgCgDgDgCQgEgBgEAAQgGAAgGADQgGADgFAEIAAA8IgPAAIAAhxIAPAAIAAAqQAGgGAGgDQAIgDAGAAQANAAAHAIQAHAIAAAOIAAA1gAjtA4IglgrIgUAAIAAArIgPAAIAAhsIAfAAQAKAAAGACQAHABAGADQAFAEAEAFQADAGAAAJQAAAMgGAHQgGAIgKADIApAwgAkmABIAPAAIAMgBQAFgBAEgDQADgDABgEQACgEAAgHQAAgEgCgEQgCgDgDgDQgDgCgEgBIgLgBIgRAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(2));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(0.1,0,0,4).p("ApNh8ISbAAQAoAAAAAoIAACpQAAAogoAAIybAAQgoAAAAgoIAAipQAAgoAoAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#FFFFFF"],[0,1],0,136.1,0,-17.9).s().p("ApNB9QgoAAAAgoIAAipQAAgoAoAAISbAAQAoAAAAAoIAACpQAAAogoAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#FFFFFF"],[0,1],1,127.5,1,-26.5).s().p("ApNB9QgoAAAAgoIAAipQAAgoAoAAISbAAQAoAAAAAoIAACpQAAAogoAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-13.5,128,27);


// stage content:
(lib.ePlaque2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var valcc1=-1
		var vcc1=0
		
		this.cc1.addEventListener("click", cc1f.bind(this));
		function cc1f()
		{vcc1++
			if(vcc1%2==0){valcc1=-1;this.cc1.gotoAndStop(0)}
			else{valcc1=+1;this.cc1.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc1))
		console.log(valcc1)
			}
		var valcc2=-1
		var vcc2=0	
		this.cc2.addEventListener("click", cc2f.bind(this));	
		function cc2f()
		{vcc2++
			if(vcc2%2==0){valcc2=-1;this.cc2.gotoAndStop(0)}
			else{valcc2=+1;this.cc2.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc2))
		console.log(valcc2)
			}
			var valcc3=-1
		var vcc3=0	
		this.cc3.addEventListener("click", cc3f.bind(this));	
		function cc3f()
		{vcc3++
			if(vcc3%2==0){valcc3=-1;this.cc3.gotoAndStop(0)}
			else{valcc3=+1;this.cc3.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc3))
		console.log(valcc3)
			}
			
		var valcc4=-1
		var vcc4=0	
		this.cc4.addEventListener("click", cc4f.bind(this));	
		function cc4f()
		{vcc4++
			if(vcc4%2==0){valcc4=-1;this.cc4.gotoAndStop(0)}
			else{valcc4=+1;this.cc4.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc4))
		console.log(valcc4)
			}
		var valcc5=-1
		var vcc5=0	
		this.cc5.addEventListener("click", cc5f.bind(this));	
		function cc5f()
		{vcc5++
			if(vcc5%2==0){valcc5=-1;this.cc5.gotoAndStop(0)}
			else{valcc5=+1;this.cc5.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc5))
		console.log(valcc5)
			}
		var valcc6=-1
		var vcc6=0	
		this.cc6.addEventListener("click", cc6f.bind(this));	
		function cc6f()
		{vcc6++
			if(vcc6%2==0){valcc6=-1;this.cc6.gotoAndStop(0)}
			else{valcc6=+1;this.cc6.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc6))
		console.log(valcc6)
			}
		var valcc7=-1
		var vcc7=0	
		this.cc7.addEventListener("click", cc7f.bind(this));	
		function cc7f()
		{vcc7++
			if(vcc7%2==0){valcc7=-1;this.cc7.gotoAndStop(0)}
			else{valcc7=+1;this.cc7.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc7))
		console.log(valcc7)
			}
		var valcc8=-1
		var vcc8=0	
		this.cc8.addEventListener("click", cc8f.bind(this));	
		function cc8f()
		{vcc8++
			if(vcc8%2==0){valcc8=-1;this.cc8.gotoAndStop(0)}
			else{valcc8=+1;this.cc8.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc8))
		console.log(valcc8)
			}
		var valcc9=-1
		var vcc9=0	
		this.cc9.addEventListener("click", cc9f.bind(this));	
		function cc9f()
		{vcc9++
			if(vcc9%2==0){valcc9=-1;this.cc9.gotoAndStop(0)}
			else{valcc9=+1;this.cc9.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc9))
		console.log(valcc9)
			}
			var valcc10=-1
		var vcc10=0	
		this.cc10.addEventListener("click", cc10f.bind(this));	
		function cc10f()
		{vcc10++
			if(vcc10%2==0){valcc10=-1;this.cc10.gotoAndStop(0)}
			else{valcc10=+1;this.cc10.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc10))
		console.log(valcc10)
			}
		var valcc11=-1
		var vcc11=0	
		this.cc11.addEventListener("click", cc11f.bind(this));	
		function cc11f()
		{vcc11++
			if(vcc11%2==0){valcc11=-1;this.cc11.gotoAndStop(0)}
			else{valcc11=+1;this.cc11.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc11))
		console.log(valcc11)
			}	
		var valcc12=-1
		var vcc12=0	
		this.cc12.addEventListener("click", cc12f.bind(this));	
		function cc12f()
		{vcc12++
			if(vcc12%2==0){valcc12=-1;this.cc12.gotoAndStop(0)}
			else{valcc12=+1;this.cc12.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc12))
		console.log(valcc12)
			}	
		var valcc13=-1
		var vcc13=0	
		this.cc13.addEventListener("click", cc13f.bind(this));	
		function cc13f()
		{vcc13++
			if(vcc13%2==0){valcc13=-1;this.cc13.gotoAndStop(0)}
			else{valcc13=+1;this.cc13.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc13))
		console.log(valcc13)
			}
			
		var valcc14=-1
		var vcc14=0	
		this.cc14.addEventListener("click", cc14f.bind(this));	
		function cc14f()
		{vcc14++
			if(vcc14%2==0){valcc14=-1;this.cc14.gotoAndStop(0)}
			else{valcc14=+1;this.cc14.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc14))
		console.log(valcc14)
			}	
			
		var valcc15=-1
		var vcc15=0	
		this.cc15.addEventListener("click", cc15f.bind(this));	
		function cc15f()
		{vcc15++
			if(vcc15%2==0){valcc15=-1;this.cc15.gotoAndStop(0)}
			else{valcc15=+1;this.cc15.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc15))
		console.log(valcc15)
			}
		var valcc16=-1
		var vcc16=0	
		this.cc16.addEventListener("click", cc16f.bind(this));	
		function cc16f()
		{vcc16++
			if(vcc16%2==0){valcc16=-1;this.cc16.gotoAndStop(0)}
			else{valcc16=+1;this.cc16.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc16))
		console.log(valcc16)
			}	
		var valcc17=-1
		var vcc17=0	
		this.cc17.addEventListener("click", cc17f.bind(this));	
		function cc17f()
		{vcc17++
			if(vcc17%2==0){valcc17=-1;this.cc17.gotoAndStop(0)}
			else{valcc17=+1;this.cc17.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc17))
		console.log(valcc17)
			}	
		var valcc18=-1
		var vcc18=0	
		this.cc18.addEventListener("click", cc18f.bind(this));	
		function cc18f()
		{vcc18++
			if(vcc18%2==0){valcc18=-1;this.cc18.gotoAndStop(0)}
			else{valcc18=+1;this.cc18.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc18))
		console.log(valcc18)
			}	
		var valcc19=-1
		var vcc19=0	
		this.cc19.addEventListener("click", cc19f.bind(this));	
		function cc19f()
		{vcc19++
			if(vcc19%2==0){valcc19=-1;this.cc19.gotoAndStop(0)}
			else{valcc19=+1;this.cc19.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc19))
		console.log(valcc19)
			}	
		var valcc20=-1
		var vcc20=0	
		this.cc20.addEventListener("click", cc20f.bind(this));	
		function cc20f()
		{vcc20++
			if(vcc20%2==0){valcc20=-1;this.cc20.gotoAndStop(0)}
			else{valcc20=+1;this.cc20.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc20))
		console.log(valcc20)
			}	
			
		var valcc21=-1
		var vcc21=0	
		this.cc21.addEventListener("click", cc21f.bind(this));	
		function cc21f()
		{vcc21++
			if(vcc21%2==0){valcc21=-1;this.cc21.gotoAndStop(0)}
			else{valcc21=+1;this.cc21.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc21))
		console.log(valcc21)
			}
			
		var valcc22=-1
		var vcc22=0	
		this.cc22.addEventListener("click", cc22f.bind(this));	
		function cc22f()
		{vcc22++
			if(vcc22%2==0){valcc22=-1;this.cc22.gotoAndStop(0)}
			else{valcc22=+1;this.cc22.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc22))
		console.log(valcc22)
			}	
		var valcc23=-1
		var vcc23=0	
		this.cc23.addEventListener("click", cc23f.bind(this));	
		function cc23f()
		{vcc23++
			if(vcc23%2==0){valcc23=-1;this.cc23.gotoAndStop(0)}
			else{valcc23=+1;this.cc23.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc23))
		console.log(valcc23)
			}	
		var valcc24=-1
		var vcc24=0	
		this.cc24.addEventListener("click", cc24f.bind(this));	
		function cc24f()
		{vcc24++
			if(vcc24%2==0){valcc24=-1;this.cc24.gotoAndStop(0)}
			else{valcc24=+1;this.cc24.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc24))
		console.log(valcc24)
			}	
		var valcc25=-1
		var vcc25=0	
		this.cc25.addEventListener("click", cc25f.bind(this));	
		function cc25f()
		{vcc25++
			if(vcc25%2==0){valcc25=-1;this.cc25.gotoAndStop(0)}
			else{valcc25=+1;this.cc25.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc25))
		console.log(valcc25)
			}	
		var valcc26=-1
		var vcc26=0	
		this.cc26.addEventListener("click", cc26f.bind(this));	
		function cc26f()
		{vcc26++
			if(vcc26%2==0){valcc26=-1;this.cc26.gotoAndStop(0)}
			else{valcc26=+1;this.cc26.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc26))
		console.log(valcc26)
			}	
		var valcc27=-1
		var vcc27=0	
		this.cc27.addEventListener("click", cc27f.bind(this));	
		function cc27f()
		{vcc27++
			if(vcc27%2==0){valcc27=-1;this.cc27.gotoAndStop(0)}
			else{valcc27=+1;this.cc27.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc27))
		console.log(valcc27)
			}			
		var valcc28=-1
		var vcc28=0	
		this.cc28.addEventListener("click", cc28f.bind(this));	
		function cc28f()
		{vcc28++
			if(vcc28%2==0){valcc28=-1;this.cc28.gotoAndStop(0)}
			else{valcc28=+1;this.cc28.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc28))
		console.log(valcc28)
			}	
		var valcc29=-1
		var vcc29=0	
		this.cc29.addEventListener("click", cc29f.bind(this));	
		function cc29f()
		{vcc29++
			if(vcc29%2==0){valcc29=-1;this.cc29.gotoAndStop(0)}
			else{valcc29=+1;this.cc29.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc29))
		console.log(valcc29)
			}		
		var valcc30=-1
		var vcc30=0	
		this.cc30.addEventListener("click", cc30f.bind(this));	
		function cc30f()
		{vcc30++
			if(vcc30%2==0){valcc30=-1;this.cc30.gotoAndStop(0)}
			else{valcc30=+1;this.cc30.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc30))
		console.log(valcc30)
			}	
		var valcc31=-1
		var vcc31=0	
		this.cc31.addEventListener("click", cc31f.bind(this));	
		function cc31f()
		{vcc31++
			if(vcc31%2==0){valcc31=-1;this.cc31.gotoAndStop(0)}
			else{valcc31=+1;this.cc31.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc31))
		console.log(valcc31)
			}	
					
		var valcc32=-1
		var vcc32=0	
		this.cc32.addEventListener("click", cc32f.bind(this));	
		function cc32f()
		{vcc32++
			if(vcc32%2==0){valcc32=-1;this.cc32.gotoAndStop(0)}
			else{valcc32=+1;this.cc32.gotoAndStop(1)}
			//this.indexcc.text=String(val1)
			this.indexcc.text=String(Number(this.indexcc.text)+Number(valcc32))
		console.log(valcc32)
			}
		this.indexbb.text=''
		var valbb1=-1
		var vbb1=0
		
		this.bb1.addEventListener("click", bb1f.bind(this));
		function bb1f()
		{vbb1++
			if(vbb1%2==0){valbb1=-1;this.bb1.gotoAndStop(0)}
			else{valbb1=+1;this.bb1.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb1))
		console.log(valbb1)
			}
		var valbb2=-1
		var vbb2=0	
		this.bb2.addEventListener("click", bb2f.bind(this));	
		function bb2f()
		{vbb2++
			if(vbb2%2==0){valbb2=-1;this.bb2.gotoAndStop(0)}
			else{valbb2=+1;this.bb2.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb2))
		console.log(valbb2)
			}
			var valbb3=-1
		var vbb3=0	
		this.bb3.addEventListener("click", bb3f.bind(this));	
		function bb3f()
		{vbb3++
			if(vbb3%2==0){valbb3=-1;this.bb3.gotoAndStop(0)}
			else{valbb3=+1;this.bb3.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb3))
		console.log(valbb3)
			}
			
		var valbb4=-1
		var vbb4=0	
		this.bb4.addEventListener("click", bb4f.bind(this));	
		function bb4f()
		{vbb4++
			if(vbb4%2==0){valbb4=-1;this.bb4.gotoAndStop(0)}
			else{valbb4=+1;this.bb4.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb4))
		console.log(valbb4)
			}
		var valbb5=-1
		var vbb5=0	
		this.bb5.addEventListener("click", bb5f.bind(this));	
		function bb5f()
		{vbb5++
			if(vbb5%2==0){valbb5=-1;this.bb5.gotoAndStop(0)}
			else{valbb5=+1;this.bb5.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb5))
		console.log(valbb5)
			}
		var valbb6=-1
		var vbb6=0	
		this.bb6.addEventListener("click", bb6f.bind(this));	
		function bb6f()
		{vbb6++
			if(vbb6%2==0){valbb6=-1;this.bb6.gotoAndStop(0)}
			else{valbb6=+1;this.bb6.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb6))
		console.log(valbb6)
			}
		var valbb7=-1
		var vbb7=0	
		this.bb7.addEventListener("click", bb7f.bind(this));	
		function bb7f()
		{vbb7++
			if(vbb7%2==0){valbb7=-1;this.bb7.gotoAndStop(0)}
			else{valbb7=+1;this.bb7.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb7))
		console.log(valbb7)
			}
		var valbb8=-1
		var vbb8=0	
		this.bb8.addEventListener("click", bb8f.bind(this));	
		function bb8f()
		{vbb8++
			if(vbb8%2==0){valbb8=-1;this.bb8.gotoAndStop(0)}
			else{valbb8=+1;this.bb8.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb8))
		console.log(valbb8)
			}
		var valbb9=-1
		var vbb9=0	
		this.bb9.addEventListener("click", bb9f.bind(this));	
		function bb9f()
		{vbb9++
			if(vbb9%2==0){valbb9=-1;this.bb9.gotoAndStop(0)}
			else{valbb9=+1;this.bb9.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb9))
		console.log(valbb9)
			}
			var valbb10=-1
		var vbb10=0	
		this.bb10.addEventListener("click", bb10f.bind(this));	
		function bb10f()
		{vbb10++
			if(vbb10%2==0){valbb10=-1;this.bb10.gotoAndStop(0)}
			else{valbb10=+1;this.bb10.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb10))
		console.log(valbb10)
			}
		var valbb11=-1
		var vbb11=0	
		this.bb11.addEventListener("click", bb11f.bind(this));	
		function bb11f()
		{vbb11++
			if(vbb11%2==0){valbb11=-1;this.bb11.gotoAndStop(0)}
			else{valbb11=+1;this.bb11.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb11))
		console.log(valbb11)
			}	
		var valbb12=-1
		var vbb12=0	
		this.bb12.addEventListener("click", bb12f.bind(this));	
		function bb12f()
		{vbb12++
			if(vbb12%2==0){valbb12=-1;this.bb12.gotoAndStop(0)}
			else{valbb12=+1;this.bb12.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb12))
		console.log(valbb12)
			}	
		var valbb13=-1
		var vbb13=0	
		this.bb13.addEventListener("click", bb13f.bind(this));	
		function bb13f()
		{vbb13++
			if(vbb13%2==0){valbb13=-1;this.bb13.gotoAndStop(0)}
			else{valbb13=+1;this.bb13.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb13))
		console.log(valbb13)
			}
			
		var valbb14=-1
		var vbb14=0	
		this.bb14.addEventListener("click", bb14f.bind(this));	
		function bb14f()
		{vbb14++
			if(vbb14%2==0){valbb14=-1;this.bb14.gotoAndStop(0)}
			else{valbb14=+1;this.bb14.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb14))
		console.log(valbb14)
			}	
			
		var valbb15=-1
		var vbb15=0	
		this.bb15.addEventListener("click", bb15f.bind(this));	
		function bb15f()
		{vbb15++
			if(vbb15%2==0){valbb15=-1;this.bb15.gotoAndStop(0)}
			else{valbb15=+1;this.bb15.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb15))
		console.log(valbb15)
			}
		var valbb16=-1
		var vbb16=0	
		this.bb16.addEventListener("click", bb16f.bind(this));	
		function bb16f()
		{vbb16++
			if(vbb16%2==0){valbb16=-1;this.bb16.gotoAndStop(0)}
			else{valbb16=+1;this.bb16.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb16))
		console.log(valbb16)
			}	
		var valbb17=-1
		var vbb17=0	
		this.bb17.addEventListener("click", bb17f.bind(this));	
		function bb17f()
		{vbb17++
			if(vbb17%2==0){valbb17=-1;this.bb17.gotoAndStop(0)}
			else{valbb17=+1;this.bb17.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb17))
		console.log(valbb17)
			}	
		var valbb18=-1
		var vbb18=0	
		this.bb18.addEventListener("click", bb18f.bind(this));	
		function bb18f()
		{vbb18++
			if(vbb18%2==0){valbb18=-1;this.bb18.gotoAndStop(0)}
			else{valbb18=+1;this.bb18.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb18))
		console.log(valbb18)
			}	
		var valbb19=-1
		var vbb19=0	
		this.bb19.addEventListener("click", bb19f.bind(this));	
		function bb19f()
		{vbb19++
			if(vbb19%2==0){valbb19=-1;this.bb19.gotoAndStop(0)}
			else{valbb19=+1;this.bb19.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb19))
		console.log(valbb19)
			}	
		var valbb20=-1
		var vbb20=0	
		this.bb20.addEventListener("click", bb20f.bind(this));	
		function bb20f()
		{vbb20++
			if(vbb20%2==0){valbb20=-1;this.bb20.gotoAndStop(0)}
			else{valbb20=+1;this.bb20.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb20))
		console.log(valbb20)
			}	
			
		var valbb21=-1
		var vbb21=0	
		this.bb21.addEventListener("click", bb21f.bind(this));	
		function bb21f()
		{vbb21++
			if(vbb21%2==0){valbb21=-1;this.bb21.gotoAndStop(0)}
			else{valbb21=+1;this.bb21.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb21))
		console.log(valbb21)
			}
			
		var valbb22=-1
		var vbb22=0	
		this.bb22.addEventListener("click", bb22f.bind(this));	
		function bb22f()
		{vbb22++
			if(vbb22%2==0){valbb22=-1;this.bb22.gotoAndStop(0)}
			else{valbb22=+1;this.bb22.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb22))
		console.log(valbb22)
			}	
		var valbb23=-1
		var vbb23=0	
		this.bb23.addEventListener("click", bb23f.bind(this));	
		function bb23f()
		{vbb23++
			if(vbb23%2==0){valbb23=-1;this.bb23.gotoAndStop(0)}
			else{valbb23=+1;this.bb23.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb23))
		console.log(valbb23)
			}	
		var valbb24=-1
		var vbb24=0	
		this.bb24.addEventListener("click", bb24f.bind(this));	
		function bb24f()
		{vbb24++
			if(vbb24%2==0){valbb24=-1;this.bb24.gotoAndStop(0)}
			else{valbb24=+1;this.bb24.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb24))
		console.log(valbb24)
			}	
		var valbb25=-1
		var vbb25=0	
		this.bb25.addEventListener("click", bb25f.bind(this));	
		function bb25f()
		{vbb25++
			if(vbb25%2==0){valbb25=-1;this.bb25.gotoAndStop(0)}
			else{valbb25=+1;this.bb25.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb25))
		console.log(valbb25)
			}	
		var valbb26=-1
		var vbb26=0	
		this.bb26.addEventListener("click", bb26f.bind(this));	
		function bb26f()
		{vbb26++
			if(vbb26%2==0){valbb26=-1;this.bb26.gotoAndStop(0)}
			else{valbb26=+1;this.bb26.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb26))
		console.log(valbb26)
			}	
		var valbb27=-1
		var vbb27=0	
		this.bb27.addEventListener("click", bb27f.bind(this));	
		function bb27f()
		{vbb27++
			if(vbb27%2==0){valbb27=-1;this.bb27.gotoAndStop(0)}
			else{valbb27=+1;this.bb27.gotoAndStop(1)}
			//this.indexbb.text=String(val1)
			this.indexbb.text=String(Number(this.indexbb.text)+Number(valbb27))
		console.log(valbb27)
			}
		this.calc.addEventListener("click", calcf.bind(this));
		var tt=this
		function calcf() {
			if (Number(this.indexbb.text) > Number(this.indexcc.text)) {
				this.per.text = ''
				this.msg.text = 'Bitte Prüfen Sie Ihre Angaben zu den vorhandenen Zähnen im Gebiss. '
		const myTimeout = setTimeout(show, 2000);
		
		
			} else if (Number(this.indexcc.text) == 0) {
				this.per.text = ''
				this.msg.text = 'Error Cannt divide by zero'
		const myTimeout1 = setTimeout(show1, 2000);
		
			} else {
		
				var a = Number(this.indexbb.text) / Number(this.indexcc.text)
				this.per.text = String(Math.round((a + Number.EPSILON) * 100) + '%')
			}
		
		
		}
		
		function show1() {
			tt.msg.text=''
		  clearTimeout(myTimeout);
		}
		
		function show() {
			tt.msg.text=''
		  clearTimeout(myTimeout);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// asnan
	this.cc1 = new lib.Symbol2();
	this.cc1.name = "cc1";
	this.cc1.setTransform(575.55,212.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc2 = new lib.Symbol2();
	this.cc2.name = "cc2";
	this.cc2.setTransform(570.55,255.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc3 = new lib.Symbol2();
	this.cc3.name = "cc3";
	this.cc3.setTransform(559.05,293.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc4 = new lib.Symbol2();
	this.cc4.name = "cc4";
	this.cc4.setTransform(542.6,331.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc5 = new lib.Symbol2();
	this.cc5.name = "cc5";
	this.cc5.setTransform(537.1,359.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc6 = new lib.Symbol2();
	this.cc6.name = "cc6";
	this.cc6.setTransform(518.1,378.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc7 = new lib.Symbol2();
	this.cc7.name = "cc7";
	this.cc7.setTransform(497.1,388.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc8 = new lib.Symbol2();
	this.cc8.name = "cc8";
	this.cc8.setTransform(475.6,388.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc9 = new lib.Symbol2();
	this.cc9.name = "cc9";
	this.cc9.setTransform(456.6,388.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc10 = new lib.Symbol2();
	this.cc10.name = "cc10";
	this.cc10.setTransform(437.6,378.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc11 = new lib.Symbol2();
	this.cc11.name = "cc11";
	this.cc11.setTransform(415.1,373.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc12 = new lib.Symbol2();
	this.cc12.name = "cc12";
	this.cc12.setTransform(396.1,354.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc13 = new lib.Symbol2();
	this.cc13.name = "cc13";
	this.cc13.setTransform(391.1,328.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc14 = new lib.Symbol2();
	this.cc14.name = "cc14";
	this.cc14.setTransform(379.1,293.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc15 = new lib.Symbol2();
	this.cc15.name = "cc15";
	this.cc15.setTransform(369.55,250.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc17 = new lib.Symbol2();
	this.cc17.name = "cc17";
	this.cc17.setTransform(229,266.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc18 = new lib.Symbol2();
	this.cc18.name = "cc18";
	this.cc18.setTransform(224,228.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc19 = new lib.Symbol2();
	this.cc19.name = "cc19";
	this.cc19.setTransform(219,192.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc20 = new lib.Symbol2();
	this.cc20.name = "cc20";
	this.cc20.setTransform(210,162.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc21 = new lib.Symbol2();
	this.cc21.name = "cc21";
	this.cc21.setTransform(205,138.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc22 = new lib.Symbol2();
	this.cc22.name = "cc22";
	this.cc22.setTransform(196.55,115.35,0.17,0.17,0,0,0,0.3,0.3);

	this.cc23 = new lib.Symbol2();
	this.cc23.name = "cc23";
	this.cc23.setTransform(175.55,98.35,0.17,0.17,0,0,0,0.3,0.3);

	this.cc24 = new lib.Symbol2();
	this.cc24.name = "cc24";
	this.cc24.setTransform(149.05,94.35,0.17,0.17,0,0,0,0.3,0.3);

	this.cc25 = new lib.Symbol2();
	this.cc25.name = "cc25";
	this.cc25.setTransform(119.55,94.35,0.17,0.17,0,0,0,0.3,0.3);

	this.cc26 = new lib.Symbol2();
	this.cc26.name = "cc26";
	this.cc26.setTransform(95.05,98.35,0.17,0.17,0,0,0,0.3,0.3);

	this.cc27 = new lib.Symbol2();
	this.cc27.name = "cc27";
	this.cc27.setTransform(73.1,108.85,0.17,0.17,0,0,0,0.3,0.3);

	this.cc28 = new lib.Symbol2();
	this.cc28.name = "cc28";
	this.cc28.setTransform(61.65,131.85,0.17,0.17,0,0,0,0.3,0.3);

	this.cc29 = new lib.Symbol2();
	this.cc29.name = "cc29";
	this.cc29.setTransform(54.1,158.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc30 = new lib.Symbol2();
	this.cc30.name = "cc30";
	this.cc30.setTransform(46.65,188.45,0.17,0.17,0,0,0,0.3,0.3);

	this.cc31 = new lib.Symbol2();
	this.cc31.name = "cc31";
	this.cc31.setTransform(37.15,225.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc16 = new lib.Symbol2();
	this.cc16.name = "cc16";
	this.cc16.setTransform(369.6,207.95,0.17,0.17,0,0,0,0.3,0.3);

	this.cc32 = new lib.Symbol2();
	this.cc32.name = "cc32";
	this.cc32.setTransform(35.1,262.45,0.17,0.17,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cc32},{t:this.cc16},{t:this.cc31},{t:this.cc30},{t:this.cc29},{t:this.cc28},{t:this.cc27},{t:this.cc26},{t:this.cc25},{t:this.cc24},{t:this.cc23},{t:this.cc22},{t:this.cc21},{t:this.cc20},{t:this.cc19},{t:this.cc18},{t:this.cc17},{t:this.cc15},{t:this.cc14},{t:this.cc13},{t:this.cc12},{t:this.cc11},{t:this.cc10},{t:this.cc9},{t:this.cc8},{t:this.cc7},{t:this.cc6},{t:this.cc5},{t:this.cc4},{t:this.cc3},{t:this.cc2},{t:this.cc1}]}).wait(1));

	// byna
	this.bb27 = new lib.Symbol2();
	this.bb27.name = "bb27";
	this.bb27.setTransform(518.1,226.95,0.17,0.17,0,0,0,0.3,0.3);

	this.bb26 = new lib.Symbol2();
	this.bb26.name = "bb26";
	this.bb26.setTransform(513.55,262.45,0.17,0.17,0,0,0,0.3,0.3);

	this.bb25 = new lib.Symbol2();
	this.bb25.name = "bb25";
	this.bb25.setTransform(507.8,297.45,0.17,0.17,0,0,0,0.3,0.3);

	this.bb24 = new lib.Symbol2();
	this.bb24.name = "bb24";
	this.bb24.setTransform(502.35,316.95,0.17,0.17,0,0,0,0.3,0.3);

	this.bb23 = new lib.Symbol2();
	this.bb23.name = "bb23";
	this.bb23.setTransform(488.55,332.95,0.17,0.17,0,0,0,0.3,0.3);

	this.bb22 = new lib.Symbol2();
	this.bb22.name = "bb22";
	this.bb22.setTransform(471.4,343.4,0.17,0.17,0,0,0,0.3,0.3);

	this.bb21 = new lib.Symbol2();
	this.bb21.name = "bb21";
	this.bb21.setTransform(452.6,354.95,0.17,0.17,0,0,0,0.3,0.3);

	this.bb20 = new lib.Symbol2();
	this.bb20.name = "bb20";
	this.bb20.setTransform(432.1,422,0.17,0.17,0,0,0,0.3,0.3);

	this.bb19 = new lib.Symbol2();
	this.bb19.name = "bb19";
	this.bb19.setTransform(405.1,422,0.17,0.17,0,0,0,0.3,0.3);

	this.bb18 = new lib.Symbol2();
	this.bb18.name = "bb18";
	this.bb18.setTransform(365.55,380.9,0.17,0.17,0,0,0,0.3,0.3);

	this.bb17 = new lib.Symbol2();
	this.bb17.name = "bb17";
	this.bb17.setTransform(349.6,359.45,0.17,0.17,0,0,0,0.3,0.3);

	this.bb16 = new lib.Symbol2();
	this.bb16.name = "bb16";
	this.bb16.setTransform(337.6,324.95,0.17,0.17,0,0,0,0.3,0.3);

	this.bb15 = new lib.Symbol2();
	this.bb15.name = "bb15";
	this.bb15.setTransform(326.05,278.45,0.17,0.17,0,0,0,0.3,0.3);

	this.bb7 = new lib.Symbol2();
	this.bb7.name = "bb7";
	this.bb7.setTransform(196.55,64.55,0.17,0.17,0,0,0,0.3,0.3);

	this.bb8 = new lib.Symbol2();
	this.bb8.name = "bb8";
	this.bb8.setTransform(224,82.85,0.17,0.17,0,0,0,0.3,0.3);

	this.bb9 = new lib.Symbol2();
	this.bb9.name = "bb9";
	this.bb9.setTransform(248,108.85,0.17,0.17,0,0,0,0.3,0.3);

	this.bb10 = new lib.Symbol2();
	this.bb10.name = "bb10";
	this.bb10.setTransform(255,134.35,0.17,0.17,0,0,0,0.3,0.3);

	this.bb11 = new lib.Symbol2();
	this.bb11.name = "bb11";
	this.bb11.setTransform(262.5,157.45,0.17,0.17,0,0,0,0.3,0.3);

	this.bb12 = new lib.Symbol2();
	this.bb12.name = "bb12";
	this.bb12.setTransform(276.5,200.95,0.17,0.17,0,0,0,0.3,0.3);

	this.bb13 = new lib.Symbol2();
	this.bb13.name = "bb13";
	this.bb13.setTransform(281.5,238.95,0.17,0.17,0,0,0,0.3,0.3);

	this.bb6 = new lib.Symbol2();
	this.bb6.name = "bb6";
	this.bb6.setTransform(132,124.6,0.17,0.17,0,0,0,0.3,0.3);

	this.bb5 = new lib.Symbol2();
	this.bb5.name = "bb5";
	this.bb5.setTransform(116.3,145.7,0.17,0.17,0,0,0,0.3,0.3);

	this.bb4 = new lib.Symbol2();
	this.bb4.name = "bb4";
	this.bb4.setTransform(109.4,166.2,0.17,0.17,0,0,0,0.3,0.3);

	this.bb3 = new lib.Symbol2();
	this.bb3.name = "bb3";
	this.bb3.setTransform(105.25,188.45,0.17,0.17,0,0,0,0.3,0.3);

	this.bb2 = new lib.Symbol2();
	this.bb2.name = "bb2";
	this.bb2.setTransform(95.05,219.95,0.17,0.17,0,0,0,0.3,0.3);

	this.bb14 = new lib.Symbol2();
	this.bb14.name = "bb14";
	this.bb14.setTransform(316.6,231.45,0.17,0.17,0,0,0,0.3,0.3);

	this.bb1 = new lib.Symbol2();
	this.bb1.name = "bb1";
	this.bb1.setTransform(95.6,247.95,0.17,0.17,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bb1},{t:this.bb14},{t:this.bb2},{t:this.bb3},{t:this.bb4},{t:this.bb5},{t:this.bb6},{t:this.bb13},{t:this.bb12},{t:this.bb11},{t:this.bb10},{t:this.bb9},{t:this.bb8},{t:this.bb7},{t:this.bb15},{t:this.bb16},{t:this.bb17},{t:this.bb18},{t:this.bb19},{t:this.bb20},{t:this.bb21},{t:this.bb22},{t:this.bb23},{t:this.bb24},{t:this.bb25},{t:this.bb26},{t:this.bb27}]}).wait(1));

	// Layer_2
	this.calc = new lib.Symbol1();
	this.calc.name = "calc";
	this.calc.setTransform(449.5,128.8,1.36,1.36);
	new cjs.ButtonHelper(this.calc, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.calc).wait(1));

	// Layer_3
	this.per = new cjs.Text("", "14px 'Verdana'", "#FF0000");
	this.per.name = "per";
	this.per.lineHeight = 19;
	this.per.lineWidth = 41;
	this.per.parent = this;
	this.per.setTransform(283.5,445.45);

	this.indexbb = new cjs.Text("", "14px 'Verdana'");
	this.indexbb.name = "indexbb";
	this.indexbb.lineHeight = 19;
	this.indexbb.lineWidth = 44;
	this.indexbb.parent = this;
	this.indexbb.setTransform(211.45,352.3);

	this.indexcc = new cjs.Text("", "14px 'Verdana'");
	this.indexcc.name = "indexcc";
	this.indexcc.lineHeight = 19;
	this.indexcc.lineWidth = 36;
	this.indexcc.parent = this;
	this.indexcc.setTransform(87.5,408.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AgHAmIAAgTIAPAAIAAATgAgHgSIAAgTIAPAAIAAATg");
	this.shape.setTransform(270.425,455.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AgUBDIAAAAQAGgFAFgHQAFgHAEgIQAEgJACgJQADgKgBgMQABgKgDgKQgCgKgEgJIgJgPIgLgLIAAgBIAQAAQAMAOAGAQQAHARAAATQAAAVgHAQQgGARgMANg");
	this.shape_1.setTransform(263.95,454.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AAVAtQgGgHAAgPQAAgQAGgHQAHgHAMAAQANAAAGAHQAGAHAAAQQAAAPgGAHQgHAIgMAAQgMAAgHgIgAAeAGQgDAFAAAMQAAALADAFQADAFAHAAQAHAAADgFQADgFAAgLQAAgMgDgFQgDgFgHAAQgHAAgDAFgAgfAzIA0hlIALAAIg0BlgAg6AAQgGgGAAgQQAAgPAGgHQAHgIAMAAQAMAAAHAIQAGAHAAAPQAAAQgGAGQgHAHgMAAQgMAAgHgHgAgxgmQgDAEAAAMQAAAMADAFQADAEAHAAQAHAAADgEQADgFAAgMQAAgMgDgEQgDgFgHAAQgHAAgDAFg");
	this.shape_2.setTransform(253.375,453.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AgTAzIAAgKIANAAIAAhQIgNAAIAAgLIAnAAIAAALIgNAAIAABQIANAAIAAAKg");
	this.shape_3.setTransform(242.95,453.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AggAzIAAhlIAcAAQAIAAAGACQAGABAFADQAGAEADAGQAEAGgBAJQABAHgDAFQgCAHgFACQgFAGgHACQgHADgKAAIgOAAIAAAmgAgTABIAMAAQAHAAAFgBQAFAAADgDIAFgHIABgJQAAgFgCgEQgCgEgDgCQgDgCgFgBIgJgBIgOAAg");
	this.shape_4.setTransform(236.25,453.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AAfAzIgJgcIgrAAIgKAcIgOAAIAlhlIARAAIAlBlgAgSALIAjAAIgRgxg");
	this.shape_5.setTransform(226.8,453.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066CC").s().p("AAFBDQgLgNgHgRQgGgQgBgVQABgTAGgRQAHgQALgOIAQAAIAAABIgLALIgKAPQgDAJgCAKQgDAKAAAKQAAAMADAKQACAJADAJQAEAIAGAHIALAMIAAAAg");
	this.shape_6.setTransform(218.95,454.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("AAVAmIgVgdIgVAdIgPAAIAdgmIgdglIAQAAIAUAdIAWgdIAPAAIgeAlIAeAmg");
	this.shape_7.setTransform(206.6,455.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_8.setTransform(198.275,455.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066CC").s().p("AgZAsQgHgLgBgSQAAgKADgHQADgHAEgGQAFgFAHgCQAGgDAFAAQAGAAAFABIAJAEIAAghIAOAAIAABpIgOAAIAAgIQgFAFgGADQgGACgGAAQgNAAgJgKgAgOgGQgFAHAAANQAAAOAEAHQAFAHAKAAQAFAAAFgCQAGgDAEgEIAAgqIgJgEIgJAAQgJAAgHAHg");
	this.shape_9.setTransform(189.5,453.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066CC").s().p("AATAnIAAgqIAAgKQgBgFgCgCQgCgDgCgCIgJgBQgEAAgGADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAHgCQAFgDAGAAQANAAAGAHQAHAIAAAOIAAAwg");
	this.shape_10.setTransform(181,454.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066CC").s().p("AgTAzIAAgKIANAAIAAhQIgNAAIAAgLIAnAAIAAALIgNAAIAABQIANAAIAAAKg");
	this.shape_11.setTransform(173.65,453.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066CC").s().p("AgUAGIAAgLIApAAIAAALg");
	this.shape_12.setTransform(167.725,454.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_13.setTransform(160.375,455.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066CC").s().p("AgYAgQgHgHAAgPIAAgwIANAAIAAAqIABAKQAAAEACADQABADADACQAEABAFAAQAEAAAGgCIALgHIAAg4IANAAIAABLIgNAAIAAgIIgNAIQgGACgFAAQgMAAgHgHg");
	this.shape_14.setTransform(151.75,455.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066CC").s().p("AAVA1IAAgkQgGAFgGACQgGADgGAAQgOAAgHgLQgJgKABgSQAAgKACgHQADgIAEgFQAFgFAGgCQAHgDAFAAQAHAAAEABIAKAEIAAgDIAMAAIAABngAgNghQgGAHgBAOQABAMAFAHQAEAIAKAAQAEAAAHgDQAFgCAFgEIAAgqIgJgEIgJgBQgLAAgFAIg");
	this.shape_15.setTransform(142.75,456.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066CC").s().p("AgYAhQgHgGgBgLQAAgJAEgFQAEgEAHgDQAHgDAJgCIAVgCIAAgBQgBgFgBgDQgBgDgDgBQgDgCgEgBIgHAAIgLACIgNADIAAAAIAAgMIAKgDIAOgBIANABQAHACADADQAFADACAFQADAFgBAHIAAAzIgMAAIAAgIIgFADIgFAEIgIACIgIABQgLAAgHgHgAAGAAIgMABQgFABgDAEQgEADAAAGQAAAGAEAEQAEADAIAAQAFAAAHgDQAFgCAFgEIAAgUIgOABg");
	this.shape_16.setTransform(134.2,455.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_17.setTransform(128.375,453.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066CC").s().p("AghAzIAAhlIAcAAQAJAAAGACQAGABAFADQAGAEADAGQAEAGAAAJQAAAHgDAFQgCAHgEACQgGAGgHACQgIADgKAAIgNAAIAAAmgAgTABIAMAAQAHAAAFgBQAFAAADgDIAFgHIABgJQAAgFgBgEQgDgEgEgCQgCgCgFgBIgKgBIgNAAg");
	this.shape_18.setTransform(122.7,453.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_19.setTransform(108.925,455.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066CC").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_20.setTransform(102.875,453.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066CC").s().p("AgYAhQgHgGgBgLQAAgJAFgFQADgEAHgDQAHgDAKgCIAUgCIAAgBQgBgFgBgDQgCgDgCgBQgDgCgEgBIgHAAIgLACIgNADIAAAAIAAgMIAKgDIAOgBIANABQAHACADADQAFADACAFQACAFAAAHIAAAzIgMAAIAAgIIgFADIgFAEIgIACIgIABQgLAAgHgHgAAGAAIgMABQgGABgDAEQgDADAAAGQAAAGAEAEQAEADAIAAQAFAAAHgDQAFgCAFgEIAAgUIgOABg");
	this.shape_21.setTransform(96.5,455.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066CC").s().p("AArAnIAAgqIAAgKIgCgHQgCgDgDgBQgDgCgFAAQgGAAgFADQgGACgFAFIAAADIABAEIAAAwIgMAAIAAgqIgBgKIgCgHQgBgDgDgBQgDgCgGAAQgFAAgFADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAGgCQAGgDAHAAQAIAAAFADQAFADACAGQAIgGAHgDQAGgDAHAAQANAAAGAHQAGAIAAAOIAAAwg");
	this.shape_22.setTransform(85.775,454.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066CC").s().p("AgFAzIAAhLIALAAIAABLgAgGglIAAgNIANAAIAAANg");
	this.shape_23.setTransform(77.075,453.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066CC").s().p("AAVAmIgVgdIgVAdIgQAAIAfgmIgeglIAQAAIAUAdIAWgdIAQAAIgfAlIAfAmg");
	this.shape_24.setTransform(71,455.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066CC").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAJgLAPAAQAQAAAKALQAJAKAAASQAAATgJALQgKAKgQAAQgPAAgJgKgAgPgVQgGAHAAAOQAAAOAGAIQAGAHAJAAQALAAAFgHQAGgHAAgPQAAgOgGgHQgFgHgLAAQgJAAgGAHg");
	this.shape_25.setTransform(62.725,455.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0066CC").s().p("AgXAmIAAhLIANAAIAAALQAHgGAGgDQAGgCAFAAIAGAAIAEABIAAANIgBAAIgGgBIgGAAQgGAAgFACQgFADgFAEIAAA1g");
	this.shape_26.setTransform(56.15,455.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0066CC").s().p("AghA1IAAhnIANAAIAAAIQAFgEAHgDQAGgDAGAAQAOAAAIAKQAIALAAASQAAAJgDAHQgDAIgFAFQgEAFgGADQgGADgHAAQgFAAgFgCQgFgBgFgDIAAAggAgJgmQgGADgFAEIAAAqIAKADIAJABQAJAAAGgHQAGgHAAgOQAAgNgEgHQgFgHgKAAQgEAAgGACg");
	this.shape_27.setTransform(48.425,456.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0066CC").s().p("AghA1IAAhnIANAAIAAAIQAFgEAHgDQAGgDAGAAQAOAAAIAKQAIALAAASQAAAJgDAHQgDAIgFAFQgEAFgGADQgGADgHAAQgFAAgFgCQgFgBgFgDIAAAggAgJgmQgGADgFAEIAAAqIAKADIAJABQAJAAAGgHQAGgHAAgOQAAgNgEgHQgFgHgKAAQgEAAgGACg");
	this.shape_28.setTransform(39.725,456.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0066CC").s().p("AAfAzIgKgcIgrAAIgKAcIgNAAIAlhlIARAAIAlBlgAgRALIAjAAIgSgxg");
	this.shape_29.setTransform(30.35,453.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0066CC").s().p("AgHAmIAAgTIAPAAIAAATgAgHgSIAAgTIAPAAIAAATg");
	this.shape_30.setTransform(75.025,416.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0066CC").s().p("AgRAmIgMgFIAAgOIABAAQAGAEAHADQAIADAHAAQAHAAAFgDQAFgDAAgGQAAgEgDgCQgCgCgIgCIgGgBIgIgCQgKgDgEgEQgEgGAAgHQAAgEACgFQACgEADgDQAEgDAGgCQAGgCAGAAIAOACQAHABAFACIAAAOIgBAAQgFgDgHgDQgHgCgHAAQgGgBgEADQgFADAAAFQAAAFADACQADADAGABIAHACIAHACQAJABAFAFQAFAEAAAJQAAAKgJAHQgIAHgOAAQgJAAgHgCg");
	this.shape_31.setTransform(68.275,416.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0066CC").s().p("AgRAmIgMgFIAAgOIABAAQAGAEAHADQAIADAHAAQAHAAAFgDQAFgDAAgGQAAgEgDgCQgCgCgIgCIgGgBIgIgCQgKgDgEgEQgEgGAAgHQAAgEACgFQACgEADgDQAEgDAGgCQAGgCAGAAIAOACQAHABAFACIAAAOIgBAAQgFgDgHgDQgHgCgHAAQgGgBgEADQgFADAAAFQAAAFADACQADADAGABIAHACIAHACQAJABAFAFQAFAEAAAJQAAAKgJAHQgIAHgOAAQgJAAgHgCg");
	this.shape_32.setTransform(60.975,416.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0066CC").s().p("AgFAzIAAhLIALAAIAABLgAgGglIAAgNIANAAIAAANg");
	this.shape_33.setTransform(55.375,415.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0066CC").s().p("AgKA1IgKgEIgBADIgMAAIAAhpIANAAIAAAmQAGgFAGgCQAGgDAGAAQAOAAAIAKQAIALAAARQAAAKgDAIQgDAHgEAGQgFAFgGADQgGACgHAAQgFAAgFgBgAgJgLQgGADgFAEIAAAqIAKAEIAJABQAJAAAGgHQAGgHAAgPQAAgOgEgGQgFgHgKAAQgEAAgGACg");
	this.shape_34.setTransform(49.375,415.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_35.setTransform(40.575,416.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0066CC").s().p("AgNAxQgKgDgHgGQgHgHgEgKQgDgKAAgNQAAgYAOgOQAOgOAYAAQAJAAAJACQAJACAKAFIAAAQIgBAAIgGgEIgIgEQgFgDgGgBQgGgBgHAAQgQAAgKALQgKALAAASQAAATAKALQAKALARAAIAOgBIALgEIAAgZIgbAAIAAgLIAoAAIAAArQgIAEgKADQgKADgJAAQgLAAgKgEg");
	this.shape_36.setTransform(30.875,415.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0066CC").s().p("AArAnIAAgqIAAgKIgCgHQgCgDgDgBQgDgCgFAAQgGAAgFADQgGACgFAFIAAADIABAEIAAAwIgMAAIAAgqIgBgKIgCgHQgBgDgDgBQgDgCgGAAQgFAAgFADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAGgCQAGgDAHAAQAIAAAFADQAFADACAGQAIgGAHgDQAGgDAHAAQANAAAGAHQAGAIAAAOIAAAwg");
	this.shape_37.setTransform(261.575,397.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0066CC").s().p("AgFAzIAAhLIALAAIAABLgAgGglIAAgNIANAAIAAANg");
	this.shape_38.setTransform(252.875,396.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_39.setTransform(241.875,397.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0066CC").s().p("AATAnIAAgqIAAgKQgBgFgBgCQgDgDgDgCIgIgBQgEAAgGADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAGgCQAGgDAGAAQANAAAHAHQAGAIAAAOIAAAwg");
	this.shape_40.setTransform(233.3,397.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0066CC").s().p("AATA1IAAgrIgBgKQAAgEgCgCQgCgDgCgCIgJgBQgFAAgFADIgLAGIAAA4IgNAAIAAhpIANAAIAAAmQAGgFAHgCQAFgDAGAAQANAAAGAHQAHAIAAANIAAAxg");
	this.shape_41.setTransform(224.45,396.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0066CC").s().p("AgYAuQgHgHAAgLQAAgJADgFQAEgFAHgDQAHgDAJgCIAVgBIAAgBQAAgFgCgCQgBgDgDgCQgDgCgEAAIgHgBIgLACIgNAEIAAAAIAAgNIAKgDIAOgBIANABQAGACAEADQAFADACAFQADAFgBAHIAAAzIgMAAIAAgIIgFADIgFAEIgIACIgIABQgLAAgHgGgAAGALIgMACQgFACgDADQgEADAAAGQAAAHAEADQAEADAIAAQAFAAAHgCQAFgDAFgEIAAgVIgOABgAAKgmIAAgNIAOAAIAAANgAgRgmIAAgNIANAAIAAANg");
	this.shape_42.setTransform(215.55,396.675);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0066CC").s().p("AgnAzIAAgNIA+hMIg7AAIAAgMIBKAAIAAANIg+BMIBAAAIAAAMg");
	this.shape_43.setTransform(206.825,396.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0066CC").s().p("AATAnIAAgqIAAgKQgBgFgCgCQgCgDgCgCIgJgBQgEAAgGADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAHgCQAFgDAGAAQANAAAGAHQAHAIAAAOIAAAwg");
	this.shape_44.setTransform(192.7,397.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_45.setTransform(184.075,397.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0066CC").s().p("AATAnIAAgqIAAgKQgBgFgCgCQgCgDgCgCIgJgBQgEAAgGADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAHgCQAFgDAGAAQANAAAGAHQAHAIAAAOIAAAwg");
	this.shape_46.setTransform(175.5,397.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_47.setTransform(166.875,397.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0066CC").s().p("AgZAsQgHgLgBgSQAAgKADgHQADgHAFgGQAEgFAHgCQAGgDAFAAQAHAAAEABIAJAEIAAghIAOAAIAABpIgOAAIAAgIQgFAFgGADQgGACgGAAQgNAAgJgKgAgNgGQgHAHABANQAAAOAEAHQAFAHAKAAQAFAAAFgCQAGgDAEgEIAAgqIgJgEIgJAAQgJAAgGAHg");
	this.shape_48.setTransform(158.1,396.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0066CC").s().p("AATAnIAAgqIAAgKQgBgFgBgCQgDgDgDgCIgIgBQgEAAgGADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAGgCQAGgDAGAAQANAAAHAHQAGAIAAAOIAAAwg");
	this.shape_49.setTransform(149.6,397.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0066CC").s().p("AgYAhQgIgGAAgLQAAgJAFgFQADgEAHgDQAHgDAKgCIATgCIAAgCQAAgEgBgDQgCgDgCgBQgDgCgEgBIgHAAIgLACIgNADIgBAAIAAgMIALgDIAOgBIANABQAHACADADQAFADACAFQACAFAAAHIAAAzIgNAAIAAgIIgEADIgFAEIgIACIgJABQgKAAgHgHgAAGAAIgMABQgGACgDADQgDADAAAGQAAAGAEAEQAEADAIAAQAFAAAHgDQAFgCAEgEIAAgUIgNABg");
	this.shape_50.setTransform(140.7,397.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0066CC").s().p("AATA1IAAgrIgBgKQAAgEgBgCQgCgDgEgCIgIgBQgFAAgFADIgLAGIAAA4IgNAAIAAhpIANAAIAAAmQAGgFAGgCQAGgDAHAAQAMAAAHAHQAGAIAAANIAAAxg");
	this.shape_51.setTransform(132.35,396.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0066CC").s().p("AgXAmIAAhLIANAAIAAALQAHgGAGgDQAGgCAFAAIAGAAIAEABIAAANIgBAAIgGgBIgGAAQgGAAgFACQgFADgFAEIAAA1g");
	this.shape_52.setTransform(125.55,397.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0066CC").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAJgLAPAAQAQAAAKALQAJAKAAASQAAATgJALQgKAKgQAAQgPAAgJgKgAgPgVQgGAHAAAOQAAAOAGAIQAGAHAJAAQALAAAFgHQAGgHAAgPQAAgOgGgHQgFgHgLAAQgJAAgGAHg");
	this.shape_53.setTransform(117.625,397.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0066CC").s().p("AgFAmIgfhLIAOAAIAXA8IAXg8IANAAIgeBLg");
	this.shape_54.setTransform(109.325,397.875);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0066CC").s().p("AgXAmIAAhLIANAAIAAALQAIgGAEgDQAHgCAFAAIAGAAIAEABIAAANIgBAAIgFgBIgHAAQgGAAgFACQgFADgFAEIAAA1g");
	this.shape_55.setTransform(97.95,397.875);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_56.setTransform(90.125,397.875);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0066CC").s().p("AgYAsQgIgLAAgSQAAgKACgHQADgHAFgGQAFgFAFgCQAGgDAGAAQAHAAAEABIAKAEIAAghIAMAAIAABpIgMAAIAAgIQgGAFgGADQgGACgGAAQgOAAgHgKgAgNgGQgHAHAAANQAAAOAGAHQAEAHAKAAQAEAAAHgCQAFgDAFgEIAAgqIgJgEIgJAAQgLAAgFAHg");
	this.shape_57.setTransform(81.35,396.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0066CC").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_58.setTransform(70.475,396.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0066CC").s().p("AATA1IAAgrIgBgKQAAgEgCgCQgBgDgDgCIgJgBQgFAAgFADIgLAGIAAA4IgNAAIAAhpIANAAIAAAmQAGgFAHgCQAFgDAGAAQANAAAGAHQAHAIAAANIAAAxg");
	this.shape_59.setTransform(64.15,396.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0066CC").s().p("AgYAhQgHgGAAgLQAAgJADgFQAEgEAHgDQAHgDAJgCIAVgCIAAgCQAAgEgCgDQgBgDgDgBQgDgCgEgBIgHAAIgLACIgNADIAAAAIAAgMIAKgDIAOgBIAOABQAFACAEADQAFADACAFQACAFABAHIAAAzIgNAAIAAgIIgFADIgGAEIgHACIgIABQgLAAgHgHgAAGAAIgMABQgFACgDADQgEADAAAGQAAAGAEAEQAEADAIAAQAFAAAGgDQAGgCAFgEIAAgUIgOABg");
	this.shape_60.setTransform(55.25,397.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0066CC").s().p("AgeAmIAAgJIAsg3IgrAAIAAgLIA7AAIAAAJIgsA3IAtAAIAAALg");
	this.shape_61.setTransform(47.675,397.875);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0066CC").s().p("AATAnIAAgqIgBgKQAAgFgBgCQgDgDgDgCIgIgBQgFAAgFADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAGgCQAGgDAHAAQAMAAAHAHQAGAIAAAOIAAAwg");
	this.shape_62.setTransform(39.55,397.775);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0066CC").s().p("AAfAzIgKgcIgrAAIgKAcIgNAAIAlhlIARAAIAlBlgAgRALIAjAAIgSgxg");
	this.shape_63.setTransform(30.35,396.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0066CC").s().p("AgHAmIAAgTIAPAAIAAATgAgHgSIAAgTIAPAAIAAATg");
	this.shape_64.setTransform(193.225,359.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0066CC").s().p("AgNA1IgLgDIAAgNIAAAAIAKADQAHACAGAAQAGAAAFgBQAEgCACgDQADgCABgEIABgJIAAgHQgGAFgFACQgGADgHAAQgOAAgHgKQgJgKABgRQgBgKADgHQADgHAEgFQAFgFAGgDQAHgDAFAAQAHAAAFACIAJAEIAAgEIAMAAIAABDQABATgJAKQgJAJgSAAIgLgBgAgOgiQgFAHgBAOQAAAMAFAGQAFAHAKAAQAEAAAHgCIAKgGIAAgpIgKgDIgIgBQgKAAgHAHg");
	this.shape_65.setTransform(180.55,361.125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0066CC").s().p("AgYAhQgHgHgBgKQAAgJAEgFQAEgEAHgDQAHgEAJgBIAVgBIAAgCQgBgFgBgCQgBgDgDgCQgDgCgEgBIgHAAIgLABIgNAFIAAAAIAAgOIAKgCIAOgBIANABQAHACADACQAFAEACAFQADAFgBAHIAAAzIgMAAIAAgIIgFADIgFADIgIADIgIABQgLAAgHgHgAAGAAIgMABQgFABgDAEQgEADAAAGQAAAGAEAEQAEADAIAAQAFAAAHgDQAFgCAFgEIAAgUIgOABg");
	this.shape_66.setTransform(172,359.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0066CC").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_67.setTransform(166.175,358.275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_68.setTransform(160.075,359.775);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0066CC").s().p("AgKA1IgKgEIgBADIgMAAIAAhpIANAAIAAAmQAGgFAGgCQAGgDAGAAQAOAAAIAKQAIALAAARQAAAKgDAIQgDAHgEAGQgFAFgGADQgGACgHAAQgFAAgFgBgAgJgLQgGADgFAEIAAAqIAKAEIAJABQAJAAAGgHQAGgHAAgPQAAgOgEgGQgFgHgKAAQgEAAgGACg");
	this.shape_69.setTransform(151.825,358.375);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0066CC").s().p("AATAnIAAgqIgBgKQAAgFgCgCQgBgDgEgCIgIgBQgEAAgGADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAGgCQAGgDAHAAQAMAAAGAHQAHAIAAAOIAAAwg");
	this.shape_70.setTransform(142.8,359.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0066CC").s().p("AATA1IAAgrIAAgKQgBgEgBgCQgCgDgEgCIgIgBQgFAAgFADIgLAGIAAA4IgNAAIAAhpIANAAIAAAmQAGgFAGgCQAGgDAHAAQAMAAAHAHQAGAIAAANIAAAxg");
	this.shape_71.setTransform(133.95,358.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0066CC").s().p("AgYAhQgIgHAAgKQAAgJAFgFQADgEAHgDQAHgEAKgBIATgBIAAgCQABgFgCgCQgCgDgCgCQgDgCgEgBIgHAAIgLABIgNAFIgBAAIAAgOIALgCIAOgBIANABQAGACAFACQAEAEACAFQADAFAAAHIAAAzIgOAAIAAgIIgEADIgGADIgHADIgJABQgKAAgHgHgAAGAAIgMABQgGABgDAEQgDADAAAGQAAAGAEAEQAEADAIAAQAGAAAFgDQAGgCAEgEIAAgUIgNABg");
	this.shape_72.setTransform(125.05,359.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0066CC").s().p("AgnAzIAAgNIA+hMIg7AAIAAgMIBKAAIAAANIg+BMIBAAAIAAAMg");
	this.shape_73.setTransform(116.675,358.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0066CC").s().p("AgIArQgGgGAAgOIAAgnIgJAAIAAgLIAJAAIAAgWIANAAIAAAWIAZAAIAAALIgZAAIAAAiIAAAJIABAGIAEAFIAIABIAGgBIAFgBIABAAIAAALIgIABIgHABQgLAAgGgHg");
	this.shape_74.setTransform(104.275,358.75);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0066CC").s().p("AgFAzIAAhLIALAAIAABLgAgGglIAAgNIANAAIAAANg");
	this.shape_75.setTransform(99.575,358.475);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0066CC").s().p("AArAnIAAgqIAAgKIgCgHQgCgDgDgBQgDgCgFAAQgGAAgFADQgGACgFAFIAAADIABAEIAAAwIgMAAIAAgqIgBgKIgCgHQgBgDgDgBQgDgCgGAAQgFAAgFADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAGgCQAGgDAHAAQAIAAAFADQAFADACAGQAIgGAHgDQAGgDAHAAQANAAAGAHQAGAIAAAOIAAAwg");
	this.shape_76.setTransform(90.875,359.675);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0066CC").s().p("AATAnIAAgqIgBgKQAAgFgBgCQgCgDgEgCIgIgBQgFAAgFADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAGgCQAGgDAHAAQAMAAAHAHQAGAIAAAOIAAAwg");
	this.shape_77.setTransform(74.75,359.675);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_78.setTransform(66.125,359.775);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0066CC").s().p("AATA1IAAgrIgBgKQAAgEgBgCQgDgDgDgCIgIgBQgFAAgFADIgLAGIAAA4IgNAAIAAhpIANAAIAAAmQAGgFAGgCQAGgDAHAAQAMAAAHAHQAGAIAAANIAAAxg");
	this.shape_79.setTransform(57.55,358.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0066CC").s().p("AgHAmQgHgDgGgFQgFgFgCgHQgDgIAAgKQAAgSAKgKQALgLAPAAIAOACIALAEIAAAPIgBAAQgFgFgGgCQgHgDgGAAQgKAAgGAIQgHAHABANQAAAOAFAHQAHAIAKAAIAIgBIAHgDIAGgDIADgDIABAAIAAAOIgMAFQgGACgHAAQgGAAgHgCg");
	this.shape_80.setTransform(49.6,359.775);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0066CC").s().p("AgYAuQgIgHAAgLQAAgJAFgFQADgFAHgDQAHgDAKgCIATgBIAAgBQABgFgCgCQgCgDgCgCQgDgCgEAAIgHgBIgLACIgNAEIgBAAIAAgNIALgDIAOgBIANABQAGACAFADQAEADACAFQADAFAAAHIAAAzIgOAAIAAgIIgEADIgGAEIgHACIgJABQgKAAgHgGgAAGALIgMACQgGACgDADQgDADAAAGQAAAHAEADQAEADAIAAQAGAAAFgCQAGgDAEgEIAAgVIgNABgAAKgmIAAgNIAOAAIAAANgAgRgmIAAgNIANAAIAAANg");
	this.shape_81.setTransform(41.35,358.575);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0066CC").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_82.setTransform(35.525,358.275);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0066CC").s().p("AgfAzIAAhlIA/AAIAAAMIgyAAIAAAdIArAAIAAALIgrAAIAAAxg");
	this.shape_83.setTransform(30.15,358.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0066CC").s().p("AATAnIAAgqIgBgKQAAgFgBgCQgCgDgEgCIgIgBQgFAAgFADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAGgCQAGgDAHAAQAMAAAHAHQAGAIAAAOIAAAwg");
	this.shape_84.setTransform(293,340.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_85.setTransform(284.375,340.725);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0066CC").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_86.setTransform(278.325,339.225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0066CC").s().p("AgYAhQgIgGABgLQAAgJAEgFQADgEAHgDQAHgDAJgCIAUgCIAAgCQAAgEgBgDQgCgDgCgBQgDgCgEgBIgHAAIgLACIgNADIgBAAIAAgMIALgDIAOgBIAOABQAFACAFADQAEADACAFQACAFABAHIAAAzIgOAAIAAgIIgEADIgGAEIgHACIgJABQgKAAgHgHgAAGAAIgMABQgGACgDADQgDADAAAGQAAAHAEADQAEADAIAAQAGAAAFgDQAGgCAEgEIAAgUIgNABg");
	this.shape_87.setTransform(271.95,340.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0066CC").s().p("AArAnIAAgqIAAgKIgCgHQgCgDgDgBQgDgCgFAAQgGAAgFADQgGACgFAFIAAADIABAEIAAAwIgMAAIAAgqIgBgKIgCgHQgBgDgDgBQgDgCgGAAQgFAAgFADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAGgCQAGgDAHAAQAIAAAFADQAFADACAGQAIgGAHgDQAGgDAHAAQANAAAGAHQAGAIAAAOIAAAwg");
	this.shape_88.setTransform(261.225,340.625);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0066CC").s().p("AgFAzIAAhLIALAAIAABLgAgGglIAAgNIANAAIAAANg");
	this.shape_89.setTransform(252.525,339.425);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0066CC").s().p("AAVAmIgVgdIgWAdIgOAAIAdgmIgdglIAQAAIAVAdIAVgdIAPAAIgeAlIAeAmg");
	this.shape_90.setTransform(246.45,340.725);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0066CC").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAJgLAPAAQAQAAAKALQAJAKAAASQAAATgJALQgKAKgQAAQgPAAgJgKgAgPgVQgGAHAAAOQAAAOAGAIQAGAHAJAAQALAAAFgHQAGgHAAgPQAAgOgGgHQgFgHgLAAQgJAAgGAHg");
	this.shape_91.setTransform(238.175,340.725);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0066CC").s().p("AgXAmIAAhLIANAAIAAALQAIgGAEgDQAHgCAFAAIAGAAIAEABIAAANIgBAAIgFgBIgHAAQgGAAgFACQgFADgFAEIAAA1g");
	this.shape_92.setTransform(231.6,340.725);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0066CC").s().p("AghA1IAAhnIANAAIAAAIQAFgEAHgDQAGgDAGAAQAOAAAIAKQAIALAAASQAAAJgDAHQgDAIgFAFQgEAFgGADQgGADgHAAQgFAAgFgCQgFgBgFgDIAAAggAgJgmQgGADgFAEIAAAqIAKADIAJABQAJAAAGgHQAGgHAAgOQAAgNgEgHQgFgHgKAAQgEAAgGACg");
	this.shape_93.setTransform(223.875,342.025);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0066CC").s().p("AghA1IAAhnIANAAIAAAIQAFgEAHgDQAGgDAGAAQAOAAAIAKQAIALAAASQAAAJgDAHQgDAIgFAFQgEAFgGADQgGADgHAAQgFAAgFgCQgFgBgFgDIAAAggAgJgmQgGADgFAEIAAAqIAKADIAJABQAJAAAGgHQAGgHAAgOQAAgNgEgHQgFgHgKAAQgEAAgGACg");
	this.shape_94.setTransform(215.175,342.025);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0066CC").s().p("AgYAhQgHgGAAgLQAAgJADgFQAEgEAHgDQAHgDAJgCIAVgCIAAgCQAAgEgCgDQgBgDgDgBQgDgCgEgBIgHAAIgLACIgNADIAAAAIAAgMIAKgDIAOgBIANABQAGACAEADQAFADACAFQADAFgBAHIAAAzIgMAAIAAgIIgFADIgFAEIgIACIgIABQgLAAgHgHgAAGAAIgMABQgFACgDADQgEADAAAGQAAAHAEADQAEADAIAAQAFAAAHgDQAFgCAFgEIAAgUIgOABg");
	this.shape_95.setTransform(206.1,340.75);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0066CC").s().p("AgUBDIAAAAQAGgFAFgHQAFgHAEgIQADgJADgJQACgKAAgMQAAgKgCgKQgDgKgDgJIgJgPIgLgLIAAgBIAQAAQALAOAHAQQAGARABATQgBAVgGAQQgHARgLANg");
	this.shape_96.setTransform(193.95,340.625);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0066CC").s().p("AgFArIAAglIglAAIAAgKIAlAAIAAgmIALAAIAAAmIAlAAIAAAKIglAAIAAAlg");
	this.shape_97.setTransform(185.175,340.075);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0066CC").s().p("AAFBDQgLgNgHgRQgGgQgBgVQABgTAGgRQAHgQALgOIAQAAIAAABIgLALIgJAPQgDAJgDAKQgCAKAAAKQAAAMACAKQADAJADAJQAEAIAFAHIALAMIAAAAg");
	this.shape_98.setTransform(176.4,340.625);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0066CC").s().p("AATAnIAAgqIAAgKQgBgFgCgCQgCgDgCgCIgJgBQgEAAgGADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAHgCQAFgDAGAAQANAAAGAHQAHAIAAAOIAAAwg");
	this.shape_99.setTransform(163.8,340.625);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_100.setTransform(155.175,340.725);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0066CC").s().p("AgFAmIgfhLIAOAAIAXA8IAXg8IANAAIgeBLg");
	this.shape_101.setTransform(146.925,340.725);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0066CC").s().p("AgFAzIAAhLIALAAIAABLgAgGglIAAgNIANAAIAAANg");
	this.shape_102.setTransform(140.925,339.425);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0066CC").s().p("AgIAsQgGgHAAgNIAAgoIgJAAIAAgLIAJAAIAAgWIANAAIAAAWIAZAAIAAALIgZAAIAAAiIAAAJIABAHIAEADIAIABIAGAAIAFgBIABAAIAAALIgIABIgHABQgLAAgGgGg");
	this.shape_103.setTransform(136.325,339.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0066CC").s().p("AgFAzIAAhLIALAAIAABLgAgGglIAAgNIANAAIAAANg");
	this.shape_104.setTransform(131.625,339.425);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0066CC").s().p("AgRAmIgMgFIAAgOIABAAQAGAFAHADQAIACAHAAQAHAAAFgDQAFgCAAgGQAAgFgDgCQgCgDgIgBIgGgCIgIgBQgKgDgEgEQgEgGAAgHQAAgEACgFQACgEADgDQAEgEAGgCQAGgBAGAAIAOABQAHACAFADIAAANIgBAAQgFgEgHgCQgHgDgHAAQgGAAgEAEQgFACAAAGQAAAEADACQADADAGACIAHABIAHABQAJACAFAFQAFAEAAAJQAAAKgJAHQgIAHgOAAQgJAAgHgCg");
	this.shape_105.setTransform(126.125,340.75);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0066CC").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAJgLAPAAQAQAAAKALQAJAKAAASQAAATgJALQgKAKgQAAQgPAAgJgKgAgPgVQgGAHAAAOQAAAOAGAIQAGAHAJAAQALAAAFgHQAGgHAAgPQAAgOgGgHQgFgHgLAAQgJAAgGAHg");
	this.shape_106.setTransform(118.125,340.725);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0066CC").s().p("AghA1IAAhnIANAAIAAAIQAFgEAHgDQAGgDAGAAQAOAAAIAKQAIALAAASQAAAJgDAHQgDAIgFAFQgEAFgGADQgGADgHAAQgFAAgFgCQgFgBgFgDIAAAggAgJgmQgGADgFAEIAAAqIAKADIAJABQAJAAAGgHQAGgHAAgOQAAgNgEgHQgFgHgKAAQgEAAgGACg");
	this.shape_107.setTransform(109.825,342.025);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0066CC").s().p("AgXAmIAAhLIANAAIAAALQAIgGAEgDQAHgCAFAAIAGAAIAEABIAAANIgBAAIgFgBIgHAAQgGAAgFACQgFADgFAEIAAA1g");
	this.shape_108.setTransform(97.95,340.725);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0066CC").s().p("AgXAeQgLgLAAgSQAAgSALgLQAKgLAQAAQAPAAAIAJQAJAJAAAQIAAAGIg3AAQAAAHACAGQACAFADADQAEAEAFABQAEACAGAAQAHAAAIgDQAIgDAEgDIAAAAIAAAOIgNAEQgHACgHAAQgSAAgLgKgAgNgXQgHAHAAAJIAqAAQAAgLgFgFQgFgGgKAAQgJAAgGAGg");
	this.shape_109.setTransform(90.125,340.725);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0066CC").s().p("AgYAsQgIgLAAgSQAAgKACgHQADgHAFgGQAFgFAFgCQAGgDAGAAQAHAAAEABIAKAEIAAghIAMAAIAABpIgMAAIAAgIQgGAFgGADQgGACgGAAQgOAAgHgKgAgNgGQgHAHAAANQAAAOAGAHQAEAHAKAAQAEAAAHgCQAFgDAFgEIAAgqIgJgEIgJAAQgLAAgFAHg");
	this.shape_110.setTransform(81.35,339.325);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0066CC").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_111.setTransform(70.475,339.225);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0066CC").s().p("AATA1IAAgrIgBgKQAAgEgCgCQgBgDgDgCIgJgBQgFAAgFADIgLAGIAAA4IgNAAIAAhpIANAAIAAAmQAGgFAHgCQAFgDAGAAQANAAAGAHQAHAIAAANIAAAxg");
	this.shape_112.setTransform(64.15,339.225);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0066CC").s().p("AgYAhQgHgGAAgLQAAgJADgFQAEgEAHgDQAHgDAJgCIAVgCIAAgCQAAgEgCgDQgBgDgDgBQgDgCgEgBIgHAAIgLACIgNADIAAAAIAAgMIAKgDIAOgBIAOABQAFACAEADQAFADACAFQACAFABAHIAAAzIgNAAIAAgIIgFADIgGAEIgHACIgIABQgLAAgHgHgAAGAAIgMABQgFACgDADQgEADAAAGQAAAHAEADQAEADAIAAQAFAAAGgDQAGgCAFgEIAAgUIgOABg");
	this.shape_113.setTransform(55.25,340.75);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0066CC").s().p("AgeAmIAAgJIAsg3IgrAAIAAgLIA7AAIAAAJIgsA3IAtAAIAAALg");
	this.shape_114.setTransform(47.675,340.725);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0066CC").s().p("AATAnIAAgqIgBgKQAAgFgBgCQgDgDgDgCIgIgBQgFAAgFADIgLAGIAAA4IgNAAIAAhLIANAAIAAAIQAGgFAGgCQAGgDAHAAQAMAAAHAHQAGAIAAAOIAAAwg");
	this.shape_115.setTransform(39.55,340.625);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0066CC").s().p("AAfAzIgKgcIgrAAIgKAcIgNAAIAlhlIARAAIAlBlgAgRALIAjAAIgSgxg");
	this.shape_116.setTransform(30.35,339.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.indexcc},{t:this.indexbb},{t:this.per}]}).wait(1));

	// bg
	this.msg = new cjs.Text("", "14px 'Calibri'", "#FF0000");
	this.msg.name = "msg";
	this.msg.lineHeight = 19;
	this.msg.lineWidth = 522;
	this.msg.parent = this;
	this.msg.setTransform(73.1,16.9);

	this.instance = new lib.BackgroundePlaque();
	this.instance.setTransform(-10,55,0.61,0.61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.msg}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(310,254.9,338.79999999999995,209.6);
// library properties:
lib.properties = {
	id: 'EB8B55983AA1D14C9727E18F0C00D3EE',
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ePlaque2_atlas_1.png?1693150064134", id:"ePlaque2_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EB8B55983AA1D14C9727E18F0C00D3EE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;