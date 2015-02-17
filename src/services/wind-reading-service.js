export class WindReadingService
{
	readings()
	{
		return [1,2,3,4,5].map(id => {
			return {
				id : id,
				speed : '20',
				direction : 'SW',
				gusts : '30'

			}

		});

	}
}