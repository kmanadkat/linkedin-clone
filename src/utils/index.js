import { formatDistance } from 'date-fns'

const getElapsedTime = (createdAt) => {
	let elapsedDuration = ''
	if (createdAt?.seconds) {
		elapsedDuration = formatDistance(
			new Date(createdAt.seconds * 1000),
			new Date(),
			{ includeSeconds: true }
		)
	}
	return elapsedDuration
}

export { getElapsedTime }
