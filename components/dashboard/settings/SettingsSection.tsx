'use client';

import { SettingsType } from '@/types/settings';
import { useState } from 'react';

export default function SettingsSection({ settingsData }: { settingsData: SettingsType }) {
    const [settings, setSettings] = useState(settingsData);

    return (
        <section>
            <form className="text-green-primary max-w-[300px] mx-auto">
                <h2 className="text-green-primary text-base font-medium leading-normal text-center sm:text-[32px] sm:leading-[48px] mb-10">
                    Settings {/* {t('ContactMe')} */}
                </h2>
                {/* Toggle Active registration radio */}
                <label className="inline-flex items-center me-5 cursor-pointer mb-5">
                    <span className="mr-4">Active registration</span>
                    <input
                        type="checkbox"
                        name="activeRegister"
                        className="sr-only peer"
                        checked={settings.registerPermission}
                    />
                    <div className="relative w-11 h-6  bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#3b3b3b]  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
                </label>

                {/* Visible projects Radio-Like Checkboxes */}
                <div className="flex gap-4 items-center mb-10">
                    <span>Visible projects</span>
                    <div className="flex items-center space-x-4 ">
                        {[3, 6, 9].map((value) => (
                            <div key={value} className="flex items-center ">
                                <input
                                    id={`checkbox-${value}`}
                                    type="radio"
                                    name="visibility"
                                    value={value}
                                    checked={settings.visibleProjects === value}
                                    className="w-6 h-6 accent-green-primary cursor-pointer"
                                />
                                <label
                                    htmlFor={`checkbox-${value}`}
                                    className="ms-2  font-medium  cursor-pointer text-green-primary"
                                >
                                    {value}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <button type="submit" className="primaryBtn w-full">
                    Submit
                </button>
            </form>
        </section>
    );
}
