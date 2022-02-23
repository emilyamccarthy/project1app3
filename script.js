require([
				"esri/WebScene",
				"esri/views/SceneView",
				"esri/Camera",
				"esri/widgets/Home",
				"dojo/domReady!"
			], function(WebScene, SceneView, Camera, Home) {


					/*var map = new Map({
						basemap: "streets",
						ground: "world-elevation"
					});*/
					var scene = new WebScene({
						portalItem:{
						 id:"2b721b9e7bef45e2b7ff78a398a33acc", 
						}
					});
  
  /*var map = new Map({
						basemap: "streets",
						ground: "world-elevation"
					});*/
					var scene2 = new WebScene({
						portalItem:{
						 id:"d0dbe848091440aaa37ca4682e375fe3", 
						}
					});

					var camera = new Camera({
						position: [
							 -122.68118904338405,
							45.52868017243944,
							5000// elevation in meters
						],
						tilt:0,
						heading: 0
					})				

					var camera1 = new Camera({
						position: [
							 -122.66740806750744,
							45.5064192666798,
							500// elevation in meters
						],
						tilt:75,
						heading: 0
					})

					var camera2 = new Camera({
						position: [
							 -122.68977597980778,
							45.551524512812165,
							500// elevation in meters
						],
						tilt: 75,
						heading: -180
					});

					var camera3 = new Camera({
						position: [
							-122.71057067597064,
							45.51515291024118,
							1500
						],
						tilt: 0,
						heading: 0
					})

					var view = new SceneView({
						container: "viewDiv",
						map: scene,
						viewingMode:"global",
						camera: camera,
						environment: {
								lighting: {
									date: new Date(),
									directShadowsEnabled: true,
									// don't update the view time when user pans.
									// The clock widget drives the time
									cameraTrackingEnabled: false
								}
						},
				});

				var homeBtn = new Home({
						view: view
					});

					// Add the home button to the top left corner of the view
				view.ui.add(homeBtn, "top-left");

				[skirt, cent, ocean].forEach(function(button) {
					button.style.display = 'flex';
					view.ui.add(button, 'bottom-right');
				});

				cent.addEventListener('click', function() {
					// reuse the default camera position already established in the homeBtn
					view.goTo({
						target:camera2
					});
				});

				skirt.addEventListener('click', function() {
					// reuse the default camera position already established in the homeBtn
					view.goTo({
						target:camera1
					});
				});

				ocean.addEventListener('click',function(){
					view.goTo({
						target:camera3
					});
				});
			});
