import { log } from 'next-axiom';
import { Camera, Color, Geometry, Mesh, Program, Renderer } from 'ogl-typescript';
import { useEffect, useRef } from 'react';

import { colorThemes } from '~/lib';
import { useSettingsStore } from '~/lib/zustand';
import { ColorTheme } from '~/types';
import FragmentShader from './fragment.glsl';
import VertexShader from './vertex.glsl';

export function Standard(): JSX.Element {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const { colorTheme, customColor } = useSettingsStore();

	useEffect(() => {
		let animationId: number;

		const renderer = new Renderer({
			depth: false,
			dpr: 2,
			alpha: true,
		});

		const gl = renderer.gl;

		const camera = new Camera(gl, {
			fov: 15,
		});
		camera.position.z = 15;

		function handleResize(): void {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.perspective({
				aspect: gl.canvas.width / gl.canvas.height,
			});
		}

		if (containerRef.current) {
			containerRef.current.appendChild(gl.canvas);
			gl.clearColor(0, 0, 0, 0);
			window.addEventListener('resize', handleResize, false);
			handleResize();
		} else {
			log.error('Container reference is null.');
		}

		const numParticles = 100;
		const position = new Float32Array(numParticles * 3);
		const random = new Float32Array(numParticles * 4);

		for (let i = 0; i < numParticles; i++) {
			position.set([Math.random(), Math.random(), Math.random()], i * 3);
			random.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
		}

		const geometry = new Geometry(gl, {
			position: {
				size: 3,
				data: position,
			},
			random: {
				size: 4,
				data: random,
			},
		});

		const getCurrentColor = () => {
			if (colorTheme === ColorTheme.CUSTOM) {
				return customColor.hex;
			}
			return colorThemes[colorTheme.toLowerCase()][500];
		};

		const program = new Program(gl, {
			vertex: VertexShader,
			fragment: FragmentShader,
			uniforms: {
				uTime: {
					value: 0,
				},
				uColor: {
					value: new Color(getCurrentColor()),
				},
			},
			transparent: true,
			depthTest: false,
		});

		const particles = new Mesh(gl, {
			mode: gl.POINTS,
			geometry,
			program,
		});

		function update(t: number): void {
			animationId = requestAnimationFrame(update);

			particles.rotation.z += 0.0025;
			program.uniforms.uTime.value = t * 0.00025;
			program.uniforms.uColor.value = new Color(getCurrentColor());

			renderer.render({
				scene: particles,
				camera: camera,
			});
		}
		animationId = requestAnimationFrame(update);

		return () => {
			cancelAnimationFrame(animationId);
			if (containerRef.current) {
				containerRef.current.removeChild(gl.canvas);
			}
			window.removeEventListener('resize', handleResize);
		};
	}, [colorTheme, customColor]);

	return <div className="fixed inset-0" ref={containerRef} />;
}
