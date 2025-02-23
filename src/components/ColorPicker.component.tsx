import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useSettingsStore } from '~/lib/zustand';
import { CustomColor } from '~/types';

export function ColorPicker(): JSX.Element {
	const { customColor, setCustomColor } = useSettingsStore();
	const [rgb, setRgb] = useState({
		r: customColor.rgb.r,
		g: customColor.rgb.g,
		b: customColor.rgb.b
	});
	const [previewColor, setPreviewColor] = useState<CustomColor>(customColor);

	const handleColorChange = (component: 'r' | 'g' | 'b', value: string, e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		e.stopPropagation();

		const numValue = Math.min(255, Math.max(0, parseInt(value) || 0));
		const newRgb = { ...rgb, [component]: numValue };
		setRgb(newRgb);

		const hex = '#' +
			newRgb.r.toString(16).padStart(2, '0') +
			newRgb.g.toString(16).padStart(2, '0') +
			newRgb.b.toString(16).padStart(2, '0');

		const newColor: CustomColor = {
			hex,
			rgb: newRgb
		};

		setPreviewColor(newColor);
	};

	const handleSave = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

		setCustomColor(previewColor);
	};

	const getSliderBackground = (component: 'r' | 'g' | 'b') => {
		const value = rgb[component];
		const color = component === 'r' ? 'red' : component === 'g' ? 'green' : 'blue';
		return `linear-gradient(to right, ${color}00 0%, ${color}ff ${(value / 255) * 100}%)`;
	};

	const hasChanges = previewColor.hex !== customColor.hex;

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
	};

	return (
		<div className="flex flex-col space-y-4" onClick={handleClick}>
			<div className="flex items-center space-x-3 mb-2">
				<div className="flex space-x-2">
					<div
						className="w-12 h-12 rounded-lg shadow-inner"
						style={{
							backgroundColor: previewColor.hex,
							boxShadow: `0 2px 8px ${previewColor.hex}40`
						}}
					/>
					{hasChanges && (
						<div
							className="w-12 h-12 rounded-lg shadow-inner flex items-center justify-center text-xs font-medium"
							style={{
								backgroundColor: customColor.hex,
								boxShadow: `0 2px 8px ${customColor.hex}40`
							}}
						>
							<span className="bg-black/50 text-white px-2 py-1 rounded">Current</span>
						</div>
					)}
				</div>
				<div className="flex-1">
					<div className="text-sm font-medium text-gray-700 dark:text-gray-300">
						{previewColor.hex.toUpperCase()}
					</div>
					<div className="text-xs text-gray-500 dark:text-gray-400">
						rgb({rgb.r}, {rgb.g}, {rgb.b})
					</div>
				</div>
			</div>

			{(['r', 'g', 'b'] as const).map((component) => (
				<div key={component} className="space-y-1">
					<div className="flex items-center justify-between">
						<label className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">
							{component === 'r' ? (
								<Icon className="inline-block mr-1" icon="mdi:circle" color="#ef4444" />
							) : component === 'g' ? (
								<Icon className="inline-block mr-1" icon="mdi:circle" color="#22c55e" />
							) : (
								<Icon className="inline-block mr-1" icon="mdi:circle" color="#3b82f6" />
							)}
							{component}
						</label>
						<input
							type="number"
							min="0"
							max="255"
							value={rgb[component]}
							onChange={(e) => handleColorChange(component, e.target.value, e)}
							onClick={(e) => e.stopPropagation()}
							className="w-14 dark:text-white text-black px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
						/>
					</div>
					<input
						type="range"
						min="0"
						max="255"
						value={rgb[component]}
						onChange={(e) => handleColorChange(component, e.target.value, e)}
						onClick={(e) => e.stopPropagation()}
						className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-100 dark:bg-gray-800"
						style={{
							background: getSliderBackground(component),
							backgroundClip: 'padding-box',
						}}
					/>
				</div>
			))}

			<button
				onClick={handleSave}
				disabled={!hasChanges}
				className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
					hasChanges
						? 'bg-primary-500 text-white hover:bg-primary-600'
						: 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
				}`}
			>
				{hasChanges ? 'Save Changes' : 'No Changes'}
			</button>
		</div>
	);
}
