import { redirect } from '@sveltejs/kit';
import constants from '$lib/constants'
export const GET = async ({locals, url, cookies}) => {
    try {
        console.log("Cookie Server: "+ cookies.get('provider'))
        const provider = JSON.parse(await cookies.get('provider'));
        console.log("Provider"+ provider);
        const params = url.searchParams;

        if (provider.state !== params.get('state')) {
            throw "State parameters don't match.";
        }

        await locals.pb.collection('users').authWithOAuth2Code(
            provider.name,
            params.get('code'),
            provider.codeVerifier,
            constants.oAuthRedirectUrl,
        )

        throw redirect(303, '/dashboard');
    } catch (err) {
        console.error('Error: ', err);
        throw redirect(303, '/');
    }
}
