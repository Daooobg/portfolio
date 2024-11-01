'use client';

import setLanguage from "@/actions/setLanguages";

export default function LanguageSwitcher() {
    return (
        <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">En</option>
            <option value="bg">Bg</option>
        </select>
    );
}
