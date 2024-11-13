import { getSettings } from '@actions/settingsActions';
import SettingsSection from '@components/dashboard/settings/SettingsSection';

export default async function Settings() {
    const data = await getSettings();

    return <SettingsSection settingsData={data} />;
}
