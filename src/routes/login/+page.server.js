import { error, redirect } from '@sveltejs/kit';
import constants from '$lib/constants'
export const actions = {
    login: async ({ request, locals }) => {
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])
        try {
            await locals.pb.collection('users').authWithPassword(data.email, data.password);
        } catch (err) {
            console.log('Error: ', err);
            throw error(500, 'Something went wrong');
        }
        throw redirect(303, '/dashboard');
    },
    githubLogin: async ({locals, cookies}) => {
     
            const authMethods = await locals.pb.collection('users').listAuthMethods();
           const githubAuth = ((authMethods.authProviders).filter((auth) => auth.name === 'github'))[0];
            cookies.set('provider', JSON.stringify(githubAuth), {
            path: '/',
            httpOnly: true,
            secure: false
          })
          console.log("Cookie: "+ cookies.get('provider'))
            throw redirect(303, githubAuth.authUrl+constants.oAuthRedirectUrl)
     
        
    },
    discordLogin: async ({locals}) => {
        try {
            await locals.pb.collection('users').authWithOAuth2({ provider: 'discord' });
        } catch  (err){
            console.log('Error: ', err);
        }
        throw redirect(303, '/dashboard');
    },
};