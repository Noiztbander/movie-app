import React, { useEffect } from "react";
import * as THREE from "three";

import "./MainBackground.scss";

let scene, camera, renderer, plane, uniforms;

function MainBackground( {red = "0.40", green = "0.60", blue = "0.15"}) {

  useEffect(() => {
    document.getElementById("MainBackground").appendChild(init());
    render();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function init() {
    //creating scene
    scene = new THREE.Scene();

    const loader = new THREE.TextureLoader();
    const texture = loader.load(
      "https://threejsfundamentals.org/threejs/resources/images/bayer.png",
    );
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    //add camera
    camera = new THREE.OrthographicCamera(
      -1, // left
      1, // right
      1, // top
      -1, // bottom
      -1, // near,
      1, // far
    );

    //renderer
    renderer = new THREE.WebGLRenderer({ alpha: false });
    renderer.autoClearColor = false;

    //add geometry
    plane = new THREE.PlaneGeometry(2, 2);

    const fragmentShader = `
    	#include <common>

    	uniform vec3 iResolution;
    	uniform float iTime;

			const mat2 m = mat2( 0.80,  0.60, -0.60,  0.80 );

			float noise( in vec2 p )
			{
				return sin(p.x)*sin(p.y);
			}

			float fbm4( vec2 p )
			{
					float f = 0.0;
					f += 0.5000*noise( p ); p = m*p*2.02;
					f += 0.2500*noise( p ); p = m*p*2.03;
					f += 0.1250*noise( p ); p = m*p*2.01;
					f += 0.0625*noise( p );
					return f/0.9375;
			}

			float fbm6( vec2 p )
			{
					float f = 0.0;
					f += 0.500000*(0.5+0.5*noise( p )); p = m*p*2.02;
					f += 0.250000*(0.5+0.5*noise( p )); p = m*p*2.03;
					f += 0.125000*(0.5+0.5*noise( p )); p = m*p*2.01;
					f += 0.062500*(0.5+0.5*noise( p )); p = m*p*2.04;
					f += 0.031250*(0.5+0.5*noise( p )); p = m*p*2.01;
					f += 0.015625*(0.5+0.5*noise( p ));
					return f/0.96875;
			}
			vec2 fbm4_2( vec2 p )
			{
					return vec2(fbm4(p), fbm4(p+vec2(7.8)));
			}
			vec2 fbm6_2( vec2 p )
			{
					return vec2(fbm6(p+vec2(16.8)), fbm6(p+vec2(11.5)));
			}

			float func( vec2 q, out vec4 ron )
			{
					q += 0.03*sin( vec2(0.27,0.23)*iTime + length(q)*vec2(4.1,4.3));
				vec2 o = fbm4_2( 0.9*q );
					o += 0.04*sin( vec2(0.12,0.14)*iTime + length(o));
					vec2 n = fbm6_2( 3.0*o );
				ron = vec4( o, n );
					float f = 0.5 + 0.5*fbm4( 1.8*q + 6.0*n );
					return mix( f, f*f*f*3.5, f*abs(n.x) );
			}

      void mainImage( out vec4 fragColor, in vec2 fragCoord ){
				vec2 p = (2.0*fragCoord-iResolution.xy)/iResolution.y;
				float e = 7.0/iResolution.y;
				vec4 on = vec4(0.0);
				float f = func(p, on);
			vec3 col = vec3(0.0);
				col = mix( vec3(0.2,0.1,0.4), vec3(0.3,0.05,0.05), f );
				col = mix( col, vec3(0.9,0.9,0.9), dot(on.zw,on.zw) );
				col = mix( col, vec3(0.4,0.3,0.3), 0.2 + 0.5*on.y*on.y );
				col = mix( col, vec3(0.0,0.2,0.4), 0.5*smoothstep(1.2,1.3,abs(on.z)+abs(on.w)) );
				col = clamp( col*f*2.0, 0.0, 1.0 );
		#if 0
				// gpu derivatives - bad quality, but fast
			vec3 nor = normalize( vec3( dFdx(f)*iResolution.x, 6.0, dFdy(f)*iResolution.y ) );
		#else
				// manual derivatives - better quality, but slower
				vec4 kk;
			 vec3 nor = normalize( vec3( func(p+vec2(e,0.0),kk)-f,
																		2.0*e,
																		func(p+vec2(0.0,e),kk)-f ) );
		#endif
				vec3 lig = normalize( vec3( 0.9, 0.2, -0.4 ) );
				float dif = clamp( 0.3+0.7*dot( nor, lig ), 0.0, 1.0 );
				vec3 lin = vec3(${red},${green},${blue})*(nor.y*0.5+0.5) + vec3(0.15,0.10,0.05)*dif;
				col *= 1.2*lin;
			col = 1.0 - col;
			col = 1.1*col*col;
				fragColor = vec4( col, 1.0 );
     }

    	void main() {
    		mainImage(gl_FragColor, gl_FragCoord.xy);
    	}
    	`;

    uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3() },
      iChannel0: { value: texture },
    };
    const material = new THREE.ShaderMaterial({
      fragmentShader,
      uniforms,
    });

    scene.add(new THREE.Mesh(plane, material));

    return renderer.domElement;
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  //animation
  function render(time) {
    requestAnimationFrame(render);

    time *= 0.001; // convert to seconds

    resizeRendererToDisplaySize(renderer);
    // Update objects
    const canvas = renderer.domElement;
    uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
    uniforms.iTime.value = time;

    renderer.render(scene, camera);
  }

  return (
    <section id="MainBackground" className="d-flex w-100 h-100"></section>
  );
}

export default MainBackground;
