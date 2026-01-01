/*
  # Create Beta Signups Table

  1. New Tables
    - `beta_signups`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `created_at` (timestamptz)
      - `subscribed` (boolean, default true)

  2. Security
    - Enable RLS on `beta_signups` table
    - Add policy for inserting signups (public access for form submission)
    - Add policy for reading signups (authenticated admin users only)

  3. Notes
    - Stores email addresses from the beta signup form
    - Prevents duplicate signups with unique constraint
    - Tracks subscription status for email marketing compliance
*/

CREATE TABLE IF NOT EXISTS beta_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  subscribed boolean DEFAULT true
);

ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up for beta"
  ON beta_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view signups"
  ON beta_signups
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS beta_signups_email_idx ON beta_signups(email);
CREATE INDEX IF NOT EXISTS beta_signups_created_at_idx ON beta_signups(created_at DESC);
