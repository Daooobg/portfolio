import { uploadImage } from '@/lib/cloudinary';
import { verifyAuth } from '@/lib/luciaSessions';
import { createProject } from '@/lib/projects';

export default async function addProjectAction(formState: unknown, formData: FormData) {
    const mainImg = formData.get('mainImg') as File;
    const otherImages = formData.getAll('otherImages') as File[];
    const projectName = formData.get('projectName') as string;
    const enHeader = formData.get('enHeader') as string;
    const bgHeader = formData.get('bgHeader') as string;
    const bgText = formData.get('bgText') as string;
    const enText = formData.get('enText') as string;
    const github = formData.get('github') as string;
    const liveProject = formData.get('liveProject') as string;

    const errors: string[] = [];

    if (!mainImg || mainImg.size === 0) {
        errors.push('Main image is required.');
    }

    if (!projectName || projectName.trim().length === 0) {
        errors.push('ProjectName is required.');
    }

    if (otherImages.length === 0) {
        errors.push('At least one other image is required.');
    }

    if (errors.length > 0) {
        return { errors };
    }

    try {
        const result = await verifyAuth();
        if (!result.user) {
            throw new Error('Forbidden');
        }

        const mainImageUrl = await uploadImage(mainImg, projectName);
        const uploadResults = await Promise.all(
            otherImages.map(async (file) => {
                try {
                    return await uploadImage(file, projectName);
                } catch (err) {
                    console.error(`Failed to upload other image: ${file.name}`, err);
                    return null; // Return null for failed uploads
                }
            })
        );

        // Filter out failed uploads
        const validUploads = uploadResults.filter((result): result is string => result !== null);

        if (validUploads.length !== otherImages.length) {
            errors.push('Some other images failed to upload.');
        }

        if (errors.length > 0) {
            return { errors };
        }

        await createProject(
            projectName,
            mainImageUrl,
            validUploads,
            enHeader,
            bgHeader,
            bgText,
            enText,
            github,
            liveProject
        );

        return { success: true };
    } catch (error) {
        console.error('Error uploading images or creating project:', error);
        return { errors: ['Failed to create project. Please try again later.'] };
    }
}
