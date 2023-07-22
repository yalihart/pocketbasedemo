import { error, redirect } from '@sveltejs/kit';
export const actions = {
    signup: async ({locals, request}) => {
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])
        try {
            await locals.pb.collection('users').create(data);
            await locals.pb.collection('users').requestVerification(data.email);
            await locals.pb.collection('users').authWithPassword(data.email, data.password);
            
        } catch  (err){
            console.log('Error: ', err);
			throw error(500, 'Something went wrong');

        }
        throw redirect(303, '/dashboard');
    },
    githubSignup: async ({locals}) => {
        try {
            await locals.pb.collection('users').authWithOAuth2({ provider: 'github' });
        } catch  (err){
            console.log('Error: ', err);
        }
        throw redirect(303, '/dashboard');
    },
    discordSignup: async ({locals}) => {
        try {
            await locals.pb.collection('users').authWithOAuth2({ provider: 'discord' });
        } catch  (err){
            console.log('Error: ', err);
        }
        throw redirect(303, '/dashboard');
    },
}