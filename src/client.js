import { createClient } from '@supabase/supabase-js';

const URL = "https://fwdsqnvlotjydrdzzugz.supabase.co";

const API_KEY = "sb_publishable_k99aUOA8AuI5nc7JHADpFQ_O1DEsXTA";

export const supabase = createClient(URL, API_KEY);

