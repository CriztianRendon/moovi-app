//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCircle } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
	return (
		<>
			<div className='relative h-screen items-center block w-full'>
				<div
					role='status'
					className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
					<FontAwesomeIcon
						className='h-12 text-purple-500 animate-spin'
						icon={faCircleNotch}
					/>
				</div>
			</div>
		</>
	);
};

export default Loader;
