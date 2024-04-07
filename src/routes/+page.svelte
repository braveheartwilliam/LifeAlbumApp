<script>
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	console.log('routes/page');

	if (!browser) {
		console.log('Executing in server  in routes/page');
		// goto('user/login/{userName}');
		redirect(302, '$routes/welcome');
	} else {
		console.log('Executing in browser in routes/page');
		goto(`/welcome`);

		console.log('after goto in routes');
	}
</script>
