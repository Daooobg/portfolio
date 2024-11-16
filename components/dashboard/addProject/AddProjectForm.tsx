'use client';

import addProjectAction from '@actions/projectActions';
import { useActionState } from 'react';

export default function AddProjectsForm() {
    const [formState, formAction] = useActionState(addProjectAction, { errors: [] });

    // TODO: Handle formState
    console.log(formState);
    return (
        <form action={formAction}>
            <h2 className="text-green-primary text-base font-medium leading-normal text-center sm:text-[32px] sm:leading-[48px]">
                Add Portfolio
            </h2>
            <div className="flex flex-col gap-2">
                <label htmlFor="projectName" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                    Project Name
                </label>
                <input
                    type="text"
                    name="projectName"
                    className="h-11 bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="mainImg" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                    Image
                </label>
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    name="mainImg"
                    className="h-11 bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="otherImages" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                    Other Images
                </label>
                <input
                    type="file"
                    multiple
                    accept="image/png, image/jpeg"
                    name="otherImages"
                    className="h-11 bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="enHeader" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                    English Header
                </label>
                <input
                    type="text"
                    name="enHeader"
                    className="h-11 bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="enText" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                    English text
                </label>
                <textarea
                    name="enText"
                    className="h-[122px] bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bgHeader" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                    Bulgarian Header
                </label>
                <input
                    type="text"
                    name="bgHeader"
                    className="h-11 bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bgText" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                    Bulgarian text
                </label>
                <textarea
                    name="bgText"
                    className="h-[122px] bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="liveProject" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                    live link
                </label>
                <input
                    type="text"
                    name="liveProject"
                    className="h-11 bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="github" className="text-dark-lightGray text-sm font-normal leading-[18px]">
                    git link
                </label>
                <input
                    type="text"
                    name="github"
                    className="h-11 bg-inherit text-dark-gray border border-dark-lightGray rounded px-2"
                />
            </div>
            <div className="flex justify-center">
                <button type="submit" className="primaryBtn w-full sm:w-auto">
                    Submit
                </button>
            </div>
        </form>
    );
}
