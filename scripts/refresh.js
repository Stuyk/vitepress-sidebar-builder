import gaze_run_interrupt from 'gaze-run-interrupt';

// Simply runs the `npm run test` suite every time you make changes to any ts file.
gaze_run_interrupt('{src,tests}/**/*.ts', [{ command: /^win/.test(process.platform) ? 'npm.cmd' : 'npm', args: ['run', 'tests'] }])

