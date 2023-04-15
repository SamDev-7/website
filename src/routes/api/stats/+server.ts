import type { RequestHandler } from './$types';

import { statsCol } from '$lib/mongo';
import { json } from '@sveltejs/kit';
import type { ghRecord } from './update/gh-stats/+server';
import type { slackRecord } from './update/slack-stats/+server';

export type resultType = {
    total_commits: number,
    total_repos: number,
    latest_commit_message: string,
    latest_commit_link: string,
    most_stars_name: string,
    most_stars_link: string,
    total_messages: number,
    latest_message_time: Date,
    latest_message_link: string
}

export const GET = (async () => {
    const ghRecord = await statsCol.findOne({ source: "github" }) as ghRecord | null;

    const slackRecord = await statsCol.findOne({ source: "hc_slack" }) as slackRecord | null;

    if (!ghRecord || !slackRecord) {
        throw new Error("Failed to load stats, missing records in database.");
    }

    const result: resultType = {
        total_commits: ghRecord.total_commits,
        total_repos: ghRecord.total_repos,
        latest_commit_message: ghRecord.latest_commit_message,
        latest_commit_link: ghRecord.latest_commit_link,
        most_stars_name: ghRecord.most_stars_name,
        most_stars_link: ghRecord.most_stars_link,
        total_messages: slackRecord.total_messages,
        latest_message_time: slackRecord.latest_message_time,
        latest_message_link: slackRecord.latest_message_link
    }

    return json(result);
}) satisfies RequestHandler;