import Image from 'next/image';

const NextImage = ({ src, alt, height, width }: any) => {
	const imageProps = {
		src,
		alt,
		height,
		width,
		layout: 'responsive',
	};
	return <NextImage {...imageProps} />;
};

export default Image;
